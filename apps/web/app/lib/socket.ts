import { io, Socket } from "socket.io-client"
let socket: Socket | null = null;

export const initSocket = (): Socket => {
    socket = io("https://jamturbo.onrender.com/")
    return socket;
}

export const getSocket = (): Socket => {
    if (!socket) {
        throw new Error('Socket not initialized , call initSocket first')
    }
    return socket;
}