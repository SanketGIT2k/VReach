

const express = require('express')
const app = express()
const path = require('path')
// const cors = require('cors')
// app.use(cors())
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
  debug: true
});
const { v4: uuidV4 } = require('uuid')

const staticpath = path.join(__dirname, './HomePage')
const staticpath2 = path.join(__dirname, './Login-Signup')

app.use('/peerjs', peerServer);

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static(staticpath))
// app.use(express.static(staticpath2))

app.get('/', (req, res) => {
  res.sendFile(staticpath + '/homepage.html')
})

app.get('/Login-Signup', (req, res) => {
  res.sendFile(staticpath2 + '/index.html')
})


app.get('/startMeeting', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId);
    window.location.reload()
    // messages
    socket.on('message', (message) => {
      //send message to the same room
      io.to(roomId).emit('createMessage', message)
    });

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
      window.location.reload()
    })
  })
})





server.listen(process.env.PORT || 3030)
