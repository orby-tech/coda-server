
import { Server } from 'socket.io'
export let io:Server

export const createIO = (server) => {
  io = new Server(server, {
    cors: {
      origin: '*'
    }
  })
  io.on('connection', socket => {
    console.log('a user connected')
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
}
