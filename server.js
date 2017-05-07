'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/public/index.html')
  res.send('hi')
})

const server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));

  ws.on('message', (m) => {
    wss.clients.forEach(client => {
      client.send(m)
    })
  });
});
