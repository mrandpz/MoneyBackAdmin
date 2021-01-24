import {remote} from 'electron';

export default {
  getElectronRootPath:remote.app.getAppPath(),
};
