var express = require('express');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);


app.use(express.static("./public"));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

var matrixx = require("./Moduls/matrix");

console.log(matrixx);


io.on('connection', function (socket) {

});



var time = frameRate(5);

function frameRate ( frameRate )
{
  return 1000 / frameRate;
}

function draw ()
{
  // for(var i in grassArr)
  // {
  //   grassArr[i].mul();
  // }

// socket.emit("update matrix",matrixx);
}
setInterval( draw,time );