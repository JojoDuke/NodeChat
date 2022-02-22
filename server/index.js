const express = require('express');
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
app.use(cors());
const { Server } = require("socket.io");



const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

// Detect whether a connection has been made
io.on("connection", (socket) => {
    console.log(`User: ${socket.id}`);

    // Disconnect from the server
    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    }) 
});



server.listen(3001, () => {
    console.log("Working");
});