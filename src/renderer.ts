/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */


import './index.css';


console.log('👋 This message is being logged by "renderer.js", included via webpack');

// const button = document.getElementById('peer-connect');


// button.addEventListener('click',async()=>{
//     ipcRenderer.invoke('get-sources').then((result) => {
//         console.log(result);
//       })
// })


  

// const information = document.getElementById('info')
// information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

// const handleStream = (stream: any) => {
//     const video = document.querySelector('video')
//     video!.srcObject = stream
//     video!.onloadedmetadata = () => video!.play()
//   }

//   const handleError = (e: any) => {
//     console.log(e)
//   }

//   const getResource = async () => {
//     const sourceId = await window.electron.getSources();
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         audio: false,
//         video: true
//       })
//       handleStream(stream)
//     } catch (e) {
//       handleError(e)
//     }
//   }

//   getResource();