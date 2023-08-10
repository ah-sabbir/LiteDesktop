import { Peer } from 'peerjs';
import {getInterfaces} from 'net';

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('peer-connect');
    const remoteVideoRef = document.getElementById('remote-video');
    let peer:any;

    button.addEventListener('click', async () => {
        peer = new Peer();

        const remoteId = peer.on('open', (peerId:string) => {
            return peerId;
        });

        console.log("🚀 ~ file: preload.ts:15 ~ peer.on ~ remoteId:", remoteId)

        const interfaces = getInterfaces();

        console.log("🚀 ~ file: preload.ts:15 ~ peer.on ~ peer", interfaces)

        // navigator.mediaDevices.getDisplayMedia({ video: true, audio: false }).then((mediaStream) => {
        //     const call = peer.call('test', mediaStream);
        //     // console.log("🚀 ~ file: preload.ts:15 ~ peer.on ~ call:", call)
        // });
        
        // peer.on('open', (peerId:string) => {
        //     console.log('My peer ID is:', peerId);

        //     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
        //         const call = peer.call(peerId, stream);
        //         console.log("🚀 ~ file: preload.ts:15 ~ peer.on ~ call:", call)
        //     //     if (localVideoRef instanceof HTMLMediaElement) {
        //     //         localVideoRef.srcObject = stream;
        //     //         // localVideoRef.play();
        //     //     } else {
        //     //         console.error('localVideoRef is not an HTMLMediaElement', localVideoRef);
        //     //     }
        //     // }, (err) => {
        //     //     console.log('Failed to get local stream', err);
        //     });
        // });





            // const call = peer.call(peerId, null, { video: true, audio: true });
            // console.log("🚀 ~ file: preload.ts:15 ~ peer.on ~ call:", call)

            // call.on('stream', (remoteStream:any) => {
            //     console.log("🚀 ~ file: preload.ts:17 ~ call.on ~ remoteStream:", remoteStream)
            //     if (remoteVideoRef instanceof HTMLMediaElement) {
            //         remoteVideoRef.srcObject = remoteStream;
            //         // remoteVideoRef.play();
            //     } else {
            //         console.error('remoteVideoRef is not an HTMLMediaElement', remoteVideoRef);
            //     }
            // });
        // });

        // peer.on('call', (call:any) => {
        //     console.log("🚀 ~ file: preload.ts:32 ~ peer.on ~ call", call)
        //     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        //         .then((stream) => {
        //             call.answer(stream);
        //             console.log("🚀 ~ file: preload.ts:50 ~ .then ~ stream:", stream)
        //             call.on('stream', (remoteStream:any) => {
        //                 if (remoteVideoRef instanceof HTMLMediaElement) {
        //                     remoteVideoRef.srcObject = remoteStream;
        //                     // remoteVideoRef.play();
        //                 }
        //             });
        //         })
        //         .catch((err) => {
        //             console.log('Failed to get local stream', err);
        //         });
        // });
    });
});
