var http = require('http');

var express = require('express');
var compression = require('compression');

var app = express();
var server = http.Server(app);

var io = require('socket.io')(server);

server.listen(process.env.PORT || 3000);

app.use(compression());
app.use(express.static('dist'));

io.on('connection', function (socket) {
  socket.emit('news', {hello: 'world'});
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
