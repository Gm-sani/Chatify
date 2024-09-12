import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import db_connect from "./utils/db.js";
import { Server } from "socket.io";
import http from "http";

// Load environment variables from .env file
dotenv.config();

// Create an express application
const app = express();

// Set up HTTP server
const server = http.createServer(app);

// Set up Socket.IO server with CORS enabled
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins, update this if needed
  },
});

// Middleware setup
app.use(express.json());
app.use(cookieParser());

// Define API routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRouter);

// Handle undefined routes
app.use("*", (req, res) => {
  res.status(404).send("Route not found");
});

// Handle socket connections
io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  // Join a room based on room ID provided by the client
  socket.on("joinRoom", (roomId) => {
    if (roomId) {
      socket.join(roomId);
      console.log(`Client ${socket.id} joined room ${roomId}`);
    } else {
      console.log(`Client ${socket.id} tried to join a room without an ID`);
    }
  });

  // Handle chat messages within a room
  socket.on("chat", ({ roomId, message, userName }) => {
    if (roomId && message && userName) {
      const payload = { message, userName }; // Include userName in the payload
      io.to(roomId).emit("chat", payload); // Broadcast the message to the specific room
      console.log(`Message from ${userName} in room ${roomId}: ${message}`);
    } else {
      console.log(
        `Invalid roomId, message, or userName from client ${socket.id}`
      );
    }
  });

  // Handle socket disconnections
  socket.on("disconnect", () => {
    console.log("Client disconnected", socket.id);
  });
});

// Start server and connect to the database
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  db_connect();
});
