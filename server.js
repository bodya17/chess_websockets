var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'))

io.on('connection', function(socket){
    socket.on('newPos', function(newPos) {
        io.emit('newPos', newPos);
  })
});

http.listen( process.env.PORT || 3000, function(){
});