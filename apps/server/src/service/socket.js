import { io } from "../index.js";

export default function handleSocketConnection() {
    const roomsMap = new Map();
    const roomMessages = new Map();

    io.on("connect", (socket) => {
        socket.on("join_room_user", (data) => {
            if (data && data.email && data.roomId) {
                socket.join(data.roomId);
                console.log(`${data.email} has joined room ${data.roomId}`);
                
                // Create a map for particular room
                let connectedClients = roomsMap.get(data.roomId);
                if(!connectedClients){
                    connectedClients = new Map(); 
                }
                connectedClients.set(socket.id , data.email);
                roomsMap.set(data.roomId,connectedClients);
                io.to(data.roomId).emit("participant_in_room", Array.from(connectedClients.values()));
            }
            socket.on("user_in_room_chat_message", (data) =>{
                if(data && data.email && data.message){
                    console.log(`This is the user ${data.email} and it's message ${data.message} and roomId ${data.roomId}`);
                    if (!roomMessages.has(data.roomId)) {
                        roomMessages.set(data.roomId, []);
                      }
                      const messages = roomMessages.get(data.roomId);
                      if(messages.length > 5){
                        messages = [];
                      }
                      messages.push({
                        user:data.email,
                        message:data.message
                    })
                     roomMessages.set(data.roomId , messages);
                     io.to(data.roomId).emit("live_chat_messages_from_room", messages);
                }
            })
            socket.on("disconnect", () => {
                const connectClient = roomsMap.get(data.roomId);
                if(connectClient){
                    connectClient.delete(socket.id);
                }
                io.to(data.roomId).emit("participant_in_room", Array.from(connectClient.values()));
            });
        })

    })
}