import { io } from "../index.js";
export default function handleSocketConnection() {
    const connectedClients = new Map();
    io.on("connect", (socket) => {
        socket.on("join_room_user", (data) => {
            if (data && data.email && data.roomId) {
                socket.join(data.roomId);
                console.log(`${data.email} has joined room ${data.roomId}`)
                connectedClients.set(socket.id, data.email);
                io.to(data.roomId).emit("participant_in_room", Array.from(connectedClients.values()));
            }

            if (connectedClients.size) {
                io.to(data.roomId).emit("participant_in_room", Array.from(connectedClients.values()));
            }

            socket.on("disconnect", () => {
                console.log(data.email);
                connectedClients.delete(socket.id);
                io.to(data.roomId).emit("participant_in_room", Array.from(connectedClients.values()));
            });
        })

    })
}