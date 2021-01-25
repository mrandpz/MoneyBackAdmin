import { app, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';
import { format } from 'url';
import { getAppPath } from './ipcHelper';

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  /**
   * Workaround for TypeScript bug
   * @see https://github.com/microsoft/TypeScript/issues/41468#issuecomment-727543400
   */
  const env = import.meta.env;

  // Install "Vue.js devtools BETA"
  if (env.MODE === 'development') {
    app
      .whenReady()
      .then(() => import('electron-devtools-installer'))
      .then(({ default: installExtension }) => {
        /** @see https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg */
        const VUE_DEVTOOLS_BETA = 'ljjemllljcmogpfapbkkighbhhppjdbg';
        return installExtension(VUE_DEVTOOLS_BETA);
      })
      .catch((e) => console.error('Failed install extension:', e));
  }

  let mainWindow: BrowserWindow | null = null;

  async function createWindow() {
    getAppPath();
    mainWindow = new BrowserWindow({
      show: false,
      webPreferences: {
        preload: join(__dirname, '../preload/index.cjs.js'),
        contextIsolation: env.MODE !== 'test', // Spectron tests can't work with contextIsolation: true
        //前提是开启nodeIntegration,enableRemoteModule: true才会与效果// 需要获取到文件夹目录进行读写，所以改为true
        // fixbug 关闭
        nodeIntegration: true,
        enableRemoteModule: true,
      },
    });

    /**
     * URL for main window.
     * Vite dev server for development.
     * `file://../renderer/index.html` for production and test
     */
    const URL =
      env.MODE === 'development'
        ? `http://localhost:${env.VITE_DEV_SERVER_PORT || 3000}` // fixbug env.VITE_DEV_SERVER_PORT 不生效
        : format({
            protocol: 'file',
            pathname: join(__dirname, '../renderer/index.html'),
            slashes: true,
          });

    await mainWindow.loadURL(URL);
    mainWindow.maximize();
    mainWindow.show();

    if (env.MODE === 'development') {
      mainWindow.webContents.openDevTools();
    }
  }

  app.on('second-instance', () => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app
    .whenReady()
    .then(createWindow)
    .catch((e) => console.error('Failed create window:', e));

  // Auto-updates
  if (env.PROD) {
    app
      .whenReady()
      .then(() => import('electron-updater'))
      .then(({ autoUpdater }) => autoUpdater.checkForUpdatesAndNotify())
      .catch((e) => console.error('Failed check updates:', e));
  }
}
