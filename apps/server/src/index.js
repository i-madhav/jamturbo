import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import handleSocketConnection from "./service/socket.js";

const app = express();
const PORT = process.env.PORT || 8000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

handleSocketConnection(io);

app.get("/active",(req , res)  => {
  res.json({status:200});
})

httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

export { io };