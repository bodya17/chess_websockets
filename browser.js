var socket = new WebSocket("ws://localhost:8081");

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
