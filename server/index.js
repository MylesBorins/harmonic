var http = require('http');
var path = require('path');

var express = require('express');
var compression = require('compression');

var app = express();
var server = http.Server(app);

var io = require('socket.io')(server);

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'public')));

server.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

io.on('connection', function (socket) {
  socket.on('update', function (data) {
    io.emit('note', data);
  });
});
