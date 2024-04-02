const { app, Menu, Tray } = require('electron')

let appIcon = '/desktop bg.png'
app.whenReady().then(() => {
  appIcon = new Tray('/desktop bg.png')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' }
  ])

  // Make a change to the context menu
  contextMenu.items[1].checked = false

  // Call this again for Linux because we modified the context menu
  appIcon.setContextMenu(contextMenu)
})