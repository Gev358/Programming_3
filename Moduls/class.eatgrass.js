var LivingCreature = require("./class.livingcreature")
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, ind) {
        super(x, y, ind);
        this.ker = 10;
        this.energy = 10;
    }
    metod(matrix) {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character, matrix) {
        this.metod(matrix);
        return super.chooseCell(character, matrix);
    }

    move(matrix) {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells, matrix);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;

            this.y = newY;
            this.x = newX;

        }
    }

    eat(matrix) {

        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells, matrix);

        if (newCell) {
            this.enegy++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    this.energy++
                    break;
                }
            }
            this.y = newY;
            this.x = newX;

            if (this.energy >= 9) {
                this.mul(matrix);
                this.energy = 5;
            }
        }
        else {
            this.move(matrix);
            this.energy--;
            if (this.energy == 0) {
                this.die(matrix);
            }

        }
    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }


        }


    }
    mul(matrix) {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells, matrix);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;

            var newGrass = new GrassEater(newX, newY, this.index);
            grassEaterArr.push(newGrass);


        }
    }
}

function random(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}