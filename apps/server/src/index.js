import http from "http";
import { Server } from "socket.io";
import handleSocketConnection from "./service/socket.js";

const httpServer = http.createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
})

httpServer.listen(8000, () => {
    console.log(`Server is running  on 8000 port`);
})

handleSocketConnection();
export {io};