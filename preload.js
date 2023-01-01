
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('windowcontrols', {
    minimize: () => ipcRenderer.send("minimize"),
    maximize: () => ipcRenderer.send("maximize"),
    restore: () => ipcRenderer.send("restore"),
    close: () => ipcRenderer.send("close"),
    isMaximized: () => ipcRenderer.invoke('iswindowmaximized'),
})

contextBridge.exposeInMainWorld('api', {
    send: (channel, data) => ipcRenderer.invoke(channel, data),
    handle: (channel, callable, event, data) => ipcRenderer.on(channel, callable(event, data))
})
