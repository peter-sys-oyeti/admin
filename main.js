'use strict'

// Import parts of electron to use
const { app, BrowserWindow, session } = require('electron')
const path = require('path')
const os = require('os')

const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Keep a reference for dev mode
let dev = false

// Broken:
// if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
//   dev = true
// }

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
  dev = true
}

// Temporary fix broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691
if (process.platform === 'win32') {
  app.commandLine.appendSwitch('high-dpi-support', 'true')
  app.commandLine.appendSwitch('force-device-scale-factor', '1')
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  let indexPath

  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true
    })
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    })
  }

  mainWindow.loadURL(indexPath)

  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    /*BrowserWindow.addDevToolsExtension(
        path.join(os.homedir(), '/.config/google-chrome/Default/Extensions/pfgnfdagidkfgccljigdamigbcnndkod/0.9.22_0')
    )*/

    // Open the DevTools automatically if developing
    if (dev) {

        /*session.defaultSession.loadExtension(path.join(os.homedir(), '/.config/google-chrome/Default/Extensions/pfgnfdagidkfgccljigdamigbcnndkod/0.9.22_0')).then((ext)=>{
    console.log(ext)
  })*/
      //const { default: installExtension, MOBX_DEVTOOLS } = require('electron-devtools-installer')
      //session.defaultSession.loadExtension(MOBX_DEVTOOLS)
      //installExtension(MOBX_DEVTOOLS)
        //.then((name) => console.log(`Added Extension:  ${JSON.stringify(name)}`))
        //.catch(err => console.log('Error loading React DevTools: ', err))
      mainWindow.webContents.openDevTools()
      session.defaultSession.loadExtension(path.join(os.homedir(), '/.config/google-chrome/Default/Extensions/pfgnfdagidkfgccljigdamigbcnndkod/0.9.22_0'))
        /*installExtensions = async () => {
            const installer = require('electron-devtools-installer');
            const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
            const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

            return Promise.all(
                extensions.map(name => installer.default(installer[name], forceDownload))
            ).catch(console.log);
        }*/
    }
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
