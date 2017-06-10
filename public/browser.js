var chess = new Chess();
var chess2 = new Chess();

var socket = io()

var onDrop1 = function(from, to) {
  socket.emit('moveBoard1', { from, to })
}

var onDrop2 = function(from, to) {
  socket.emit('moveBoard2', { from, to })
}

var cfg = {
  draggable: true,
  position: 'start',
  onDrop: onDrop1,
}

var cfg2 = {
  draggable: true,
  position: 'start',
  onDrop: onDrop2,
}

var board = ChessBoard('board', cfg)
var board2 = ChessBoard('board2', cfg)

socket.on('moveBoard1', move => {
  chess.move(move)
  board.position(chess.fen())
})

socket.on('moveBoard2', move => {
  chess2.move(move)
  board2.position(chess2.fen())
})

function putPawn(where) {
  chess.put({ type: chess.PAWN, color: chess.BLACK }, where)
  board.position(chess.fen())
}
