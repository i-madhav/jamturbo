import { io } from "../index.js";
export default function handleSocketConnection() {
    const connectedClients = new Map();
    io.on("connect", (socket) => {
        socket.emit("mssg_server", "I am from server")
        socket.on("join_room_user", (data) => {
            if(data && data.email && data.roomId){
                socket.join(data.email);
                console.log(`${data.email} has joined room ${data.roomId}`)
                connectedClients.set(socket.id,data.email);
            }

            socket.on("disconnect",() => {
                console.log(data.email);
            })
        })
      
    })
}