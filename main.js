const { NONAME } = require('dns')
const { app, BrowserWindow, ipcMain } = require('electron')
const currentWindow = BrowserWindow.getFocusedWindow();

const wallpaper = require("wallpaper");
const sharp = require("sharp");

try {
  require('electron-reloader')(module);
} catch (_) { }

const path = require('path')
const iconPath = path.join(__dirname, "public", "favicon.png");
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    icon: iconPath,
    width: 1000,
    height: 800,
    frame: false,
    backgroundColor: '#fff',

    webPreferences: {
      webviewTag: true,
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/public/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.webContents.on("did-attach-webview", (_, contents) => {
    contents.setWindowOpenHandler((details) => {
      mainWindow.webContents.send('new-tab-url', details.url);
      return { action: 'deny' }
    })
  })

  ipcMain.handle("minimize", () => {
    mainWindow.minimize();
  })

  ipcMain.handle("maximize", () => {
    mainWindow.maximize();
  })

  ipcMain.handle("restore", () => {
    mainWindow.unmaximize();
  })

  ipcMain.handle("close", () => {
    mainWindow.close();
  })

  ipcMain.handle('check-window-maximized', async (event, data) => {
    if (mainWindow.isMaximized()) {
      mainWindow.webContents.send("is-window-maximized", true)
    }
    else {
      mainWindow.webContents.send("is-window-maximized", false)
    }
  })

  mainWindow.on('move', function () {
    if (mainWindow.isMaximized() == false) {
      mainWindow.webContents.send("unmaximize")
    }
  });

  async function getDesktopBackground() {
    const wallPath = await wallpaper.get();

    sharp(wallPath).blur(100).toFile("public/background.webp")
  }

  getDesktopBackground()

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
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
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
