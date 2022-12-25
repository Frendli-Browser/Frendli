
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('windowcontrols', {
    minimize: () => ipcRenderer.send("minimize"),
    maximize: () => ipcRenderer.send("maximize"),
    restore: () => ipcRenderer.send("restore"),
    close: () => ipcRenderer.send("close"),
    // isMaximized: await window.windowcontrols.maximize(),
    isMaximized: () => ipcRenderer.invoke('iswindowmaximized'),
})

contextBridge.exposeInMainWorld('background', { background: () => ipcRenderer.invoke('getdesktopbackground') })
