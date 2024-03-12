const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const express = require("express");
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });
});
server.listen(3001, (e) => {
  console.log(e);
});
