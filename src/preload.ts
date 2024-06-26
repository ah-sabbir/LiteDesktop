import Peer from "peerjs";

const { contextBridge, ipcRenderer } = require('electron');

let screen_id:any;

const button = document.getElementById('peer-connect');


ipcRenderer.invoke('get-sources').then((result) => {
  // ...
  // console.log(result)
  screen_id = result;
})

contextBridge.exposeInMainWorld('electronAPI', {
  getScreeId: ()=> screen_id,
})


// button.addEventListener('click',async()=>{
//     ipcRenderer.invoke('get-sources').then((result) => {
//       window.img_source = result;
//         console.log(result);
//       })
// })


// contextBridge.exposeInMainWorld('versions', {
//   node: () => process.versions.node,
//   chrome: () => process.versions.chrome,
//   electron: () => process.versions.electron,
//   ping: () => ipcRenderer.invoke('get-sources')
//   // we can also expose variables, not just functions
// })




//  This is home display

// import { Peer } from 'peerjs';
// // import {getInterfaces} from 'net';
// import {sleep, screen, Region, pixelWithColor, RGBA} from '@nut-tree/nut-js';
// import {mouse, keyboard, straightTo, Point} from '@nut-tree/nut-js';
// // const { ipcRenderer } = require('electron')
// import { desktopCapturer, ipcRenderer } from 'electron';
// import { contextBridge } from 'electron/renderer';

// contextBridge.exposeInIsolatedWorld(
//     1004,
//     'electron',
//     {
//       doThing: () => ipcRenderer.send('do-a-thing')
//     }
// )


// declare global {
//     interface Window {
//       electron: {
//         doThing(): any;
//         getSources: () => Promise<string>,
//       };
//     }
//   }


// async function printScreen(){
//     const width = await screen.width();
//     const height = await screen.height();
//     const screenUri = await screen.capture('screenshot.png');
//     const m = await mouse.getPosition();
//     console.log({width:width, height:height},screenUri, m);
//   }


// let peer:any;
// let remoteId:string;


// const constraints = {
//     audio: {
//       mandatory: {
//         chromeMediaSource: 'desktop'
//       }
//     },
//     video: {
//       mandatory: {
//         chromeMediaSource: 'desktop'
//       }
//     }
//   }




// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('peer-connect');
//     const shareButton = document.getElementById('share-connect');
//     const peerIdLabel = document.getElementById('my-peer-id');
//     var remoteId:any = null;
//     const peer = new Peer();

//     peer.on('open', (peerId:string) => {
//         remoteId = peerId
//         console.log(peerId)
//     });

//     shareButton.addEventListener('click', async ()=>{
//         peerIdLabel.style.display = "block";
//         peerIdLabel.innerHTML = `<span>My Remote Address</span><br/><span id="remote-address">${remoteId && remoteId}</span>`;
//     })

//     button.addEventListener('click', async () => {


//         console.log("🚀 ~ file: preload.ts:15 ~ peer.on ~ remoteId:", )

//         // const interfaces = getInterfaces();

//         // console.log("🚀 ~ file: preload.ts:15 ~ peer.on ~ peer", interfaces)

//         // navigator.mediaDevices.getDisplayMedia({ video: true, audio: false }).then((mediaStream) => {
//         //     const call = peer.call('test', mediaStream);
//         //     // console.log("🚀 ~ file: preload.ts:15 ~ peer.on ~ call:", call)
//         // });
        
//         // peer.on('open', (peerId:string) => {
//         //     console.log('My peer ID is:', peerId);

//         //     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
//         //         const call = peer.call(peerId, stream);
//         //         console.log("🚀 ~ file: preload.ts:15 ~ peer.on ~ call:", call)
//         //     //     if (localVideoRef instanceof HTMLMediaElement) {
//         //     //         localVideoRef.srcObject = stream;
//         //     //         // localVideoRef.play();
//         //     //     } else {
//         //     //         console.error('localVideoRef is not an HTMLMediaElement', localVideoRef);
//         //     //     }
//         //     // }, (err) => {
//         //     //     console.log('Failed to get local stream', err);
//         //     });
//         // });





//             // const call = peer.call(peerId, null, { video: true, audio: true });
//             // console.log("🚀 ~ file: preload.ts:15 ~ peer.on ~ call:", call)

//             // call.on('stream', (remoteStream:any) => {
//             //     console.log("🚀 ~ file: preload.ts:17 ~ call.on ~ remoteStream:", remoteStream)
//             //     if (remoteVideoRef instanceof HTMLMediaElement) {
//             //         remoteVideoRef.srcObject = remoteStream;
//             //         // remoteVideoRef.play();
//             //     } else {
//             //         console.error('remoteVideoRef is not an HTMLMediaElement', remoteVideoRef);
//             //     }
//             // });
//         // });

//         // peer.on('call', (call:any) => {
//         //     console.log("🚀 ~ file: preload.ts:32 ~ peer.on ~ call", call)
//         //     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//         //         .then((stream) => {
//         //             call.answer(stream);
//         //             console.log("🚀 ~ file: preload.ts:50 ~ .then ~ stream:", stream)
//         //             call.on('stream', (remoteStream:any) => {
//         //                 if (remoteVideoRef instanceof HTMLMediaElement) {
//         //                     remoteVideoRef.srcObject = remoteStream;
//         //                     // remoteVideoRef.play();
//         //                 }
//         //             });
//         //         })
//         //         .catch((err) => {
//         //             console.log('Failed to get local stream', err);
//         //         });
//         // });



//         ipcRenderer.on('SET_SOURCE', async (event, sourceId) => {
//             try {
//               const stream = await navigator.mediaDevices.getUserMedia({
//                 audio: true,
//                 video: true
//               })
//               handleStream(stream)
//             } catch (e) {
//               handleError(e)
//             }
//           })

//         function handleStream (stream:any) {
//             const video = document.querySelector('video')
//             video.srcObject = stream
//             console.log(stream);
//             video.onloadedmetadata = (e) => video.play()
//         }
        
//         function handleError (e:any) {
//             console.log(e)
//         }


//     });

// });
