class Gishatich extends LivingCreature {

    constructor(x, y, ind) {

        super(x, y,ind);
        this.ker = 5;
        this.energy = 2;
        this.enregy2 = 5;


    }
    metod() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];

    }
    chooseCell(character) {
        return super.chooseCell(character);

    }


    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {

            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;

            matrix[newY][newX] = this.index;

            this.y = newY;
            this.x = newX;


        }
    }

    eat() {
        this.multiply++;
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);

        if (newCell) {
            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;

            this.y = newY;
            this.x = newX;
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                }

            }



            if (this.energy >= 20) {

                this.mul();
                this.energy = 10;
            }
        }
        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
                break;
            }

        }

    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];


            var newGishatich = new Gishatich(newX, newY, this.index);
            gishatichArr.push(newGishatich);
            matrix[newY][newX] = 3;

        }
    }

}