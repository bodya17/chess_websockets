var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
let id = 0;
app.use(express.static('public'))

io.on('connection', function(socket){
  console.log(`${id++} a user connected`);
    socket.on('newPos', function(newPos) {
        io.emit('newPos', newPos);
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});