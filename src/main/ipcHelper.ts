import { app, ipcMain } from 'electron';

export const getAppPath= ()=>{
  ipcMain.on('get-app-path', (event, arg) => {
    event.returnValue = app.getAppPath();
    // event.reply('get-app-path-reply', app.getAppPath());
  });
};

