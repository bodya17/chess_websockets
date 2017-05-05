var socket = new WebSocket("ws://dead-simple-chess.herokuapp.com");
// var socket = new WebSocket("ws://localhost:3000");

var onChange = function(oldPos, newPos) {
  socket.send(ChessBoard.objToFen(newPos));
};

var cfg = {
  draggable: true,
  position: 'start',
  onChange: onChange
};

var board = ChessBoard('board', cfg);

socket.onmessage = function(event) {
  board.position(event.data);
};
