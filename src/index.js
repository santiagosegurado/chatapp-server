import express from "express";
import morgan from "morgan";
// import http from "http";
// import { Server as SocketServer } from 'socket.io'
import cors from 'cors';
import { dbConection } from "./db.js";
import authRouter from "./routes/user.routes.js";
import messageRouter from "./routes/message.routes.js";
import conversationRouter from "./routes/conversation.routes.js";

// Inicializadores
const app = express();
// const server = http.createServer(app);
// const io = new SocketServer(server, {
//   cors: {
//     origin: '*'
//   }
// })

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/conversation", conversationRouter);


// Socket.IO
// io.on('connection', (socket) => {
//   console.log(`Un usuario con ID ${socket.id} se ha conectado`)
//   socket.on('message', (message) => {
//     socket.broadcast.emit('message', {
//       body: message,
//       from: socket.id
//     })
//   })
// })

app.listen(4000  , () => {
  console.log("Escuchando en el puerto 4000");
  dbConection();
});
