const express = require('express');
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");

require("dotenv").config();
app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

// Detect whether a connection has been made
io.on("connection", (socket) => {
    //console.log(`User: ${socket.id}`);

    // Allow user to join room on the server
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined Room: ${data}`);
    });

    socket.on("send_message", (data) => {
        console.log(data);
        socket.to(data.room).emit("receive_message", data);
    });

    // Disconnect from the server
    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});



server.listen(process.env.PORT || 3001, () => {
    console.log("Working");
});