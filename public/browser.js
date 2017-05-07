// var socket = new WebSocket("ws://dead-simple-chess.herokuapp.com");
// // var socket = new WebSocket("ws://localhost:3000");


var socket = io()

var onChange = function(oldPos, newPos) {
  socket.emit('newPos', ChessBoard.objToFen(newPos));
};

var cfg = {
  draggable: true,
  position: 'start',
  onChange: onChange
};

var board = ChessBoard('board', cfg);

socket.on('newPos', function(newPos) {
  board.position(newPos)
})


