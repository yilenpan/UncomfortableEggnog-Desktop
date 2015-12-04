/*
http://electron.atom.io/docs/latest/tutorial/quick-start/
npm install electron-prebuilt

If you've installed electron-prebuilt globally with npm, then you will only need to run the
following in your app's source directory (electron folder):

-> electron .
*/

var electron = require('electron');
var app = electron.app;  // Module to control application life.
var BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
var globalShortcut = electron.globalShortcut;

// Report crashes to our server.
//electron.crashReporter.start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });


  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  //this registers a shortcut
  var ret = globalShortcut.register('ctrl+x', function () {
    console.log("Command pressed");
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    globalShortcut.unregister('ctrl+x');
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});