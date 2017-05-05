var http = require('http');
var Static = require('node-static');
var WebSocketServer = new require('ws');

var clients = {};

var webSocketServer = new WebSocketServer.Server({port: 8081});
webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("New connection " + id);

  ws.on('message', function(message) {
    console.log('New message ' + message);

    for(var key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', function() {
    console.log('Connection closed ' + id);
    delete clients[id];
  });

});


var fileServer = new Static.Server('.');  
http.createServer(function (req, res) {
  
  fileServer.serve(req, res);

}).listen(8080);

console.log("Server running on 8080, ws on 8081");

