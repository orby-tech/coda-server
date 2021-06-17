import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'
import { restApiFill } from './rest_api'
import { createIO } from './io'
const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = http.createServer(app)

createIO(server)
restApiFill(app)

server.listen(port, () => {
  return console.log(`server is listening on ${port}`)
})
