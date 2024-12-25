const { app, BrowserWindow } = require('electron');
require('dotenv').config();
const path = require('path')


let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    frame:false,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false
    },
  });

  // Load your HTML file
  mainWindow.loadFile('index.html');

  // Uncomment this line to open DevTools for debugging
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
