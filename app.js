var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

var matrixx = require("./Moduls/matrix");

console.log(matrixx);

var time = frameRate(5);

function frameRate ( frameRate )
{
  return 1000 / frameRate;
}

function draw ()
{
  for(var i in grassArr)
  {
    grassArr[i].mul();
  }

// socket.emit("update matrix",matrixx);
}
setInterval( draw,time );