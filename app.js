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
var gishatichArr = [];
var grassArr = [];
var kendaniArr = [];
var grassEaterArr = [];
var matrix = [];



setInterval( function(){
  for (var i in gishatichArr) {
    gishatichArr[i].eat(matrix);
   
       }
       for (var i in grassArr) {
           grassArr[i].mul(matrix);
       }
   
       for (var i in grassEaterArr) {
          grassEaterArr[i].eat(matrix);
       }
   
       for (var i in kendaniArr) {
          kendaniArr[i].krvel(matrix);
       }
   
       for (var i in kendaniArr) {
           kendaniArr[i].eat(matrix);
       }
   
       veracnox1.eat(matrix);
      socket.emit("redraw matrix", matrixx );
},time );