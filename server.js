const http = require('http');
const path = require('path');

const express = require('express');
const compression = require('compression');

const app = express();
const server = http.Server(app);

const io = require('socket.io')(server);

const indexHTML = path.resolve(__dirname, 'public', 'index.html');

app.use(compression());

app.get('/gepetto', (req, res) => {
  res.sendFile(indexHTML);
});

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

server.listen(process.env.PORT || 3000, (e) => {
  if (e) {
    console.error(e);
    process.exit(1);
  }

  const {address, port} = server.address();
  
  console.log(`Harmonic listening at http://${address}:${port}`);
});

io.on('connection', (socket) => {
  socket.on('update', (data) => {
    io.emit(data.type, data.value);
  });
});
