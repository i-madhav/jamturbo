import { io } from "../index.js";
export default function handleSocketConnection(){
    io.on("connect",(socket) =>{
        console.log(socket.id);
    })
}