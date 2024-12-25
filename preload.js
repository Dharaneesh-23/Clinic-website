const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('env', {
  APP_API_URL: process.env.APP_API_URL
});
