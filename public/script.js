var matrix = [];
var chap = 30;
var chap1 = 30;
var gishatichQanak = 10;
var socket;
var gishatichArr = [];


function setup() {

    // createCanvas(matrix.length * side, matrix[0].length * side);
    // background("grey");
    // frameRate(0);
    // console.log(veracnox1);
    background("gray");
    frameRate(0);

    socket = io();

    socket.on("first matric", function (matrix) {
        matrix = matrixx;
        createCanvas(1800, 751);
        background("gray")
        redraw();

        socket.on("redraw matrix", function (matrixx) {
        });
        socket.on("stats", function (stats) {
        });
        noLoop();
    });
}

// for (var i = 0; i < chap; i++) {
//     matrix[i] = [];
//     for (var j = 0; j < chap1; j++) {
//         matrix[i][j] = Math.round(Math.random() * 4);

//     }
// }
// matrix[0][0] = 5;


// while (gishatichQanak > 0) {
//     var x = Math.round(Math.random() * (chap - 1));
//     var y = Math.round(Math.random() * (chap - 1));

//     if (matrix[y][x] == 0) {
//         matrix[y][x] = 3;
//         gishatichQanak--;
//     }
// }


function draw() {
            for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill("green");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                    }

                    else if (matrix[y][x] == 3) {
                        fill("red");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 4) {
                        fill("blue");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 5) {
                        fill("black");
                        rect(x * side, y * side, side, side);
                    }
                }

            }
            //     for (var i in gishatichArr) {
            //  gishatichArr[i].eat(matrix);

            //     }
            //     for (var i in grassArr) {
            //         grassArr[i].mul(matrix);
            //     }

            //     for (var i in grassEaterArr) {
            //        grassEaterArr[i].eat(matrix);
            //     }

            //     for (var i in kendaniArr) {
            //        kendaniArr[i].krvel(matrix);
            //     }

            //     for (var i in kendaniArr) {
            //         kendaniArr[i].eat(matrix);
            //     }

            //     veracnox1.eat(matrix);
        }