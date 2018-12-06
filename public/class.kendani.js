class kendani extends LivingCreature {

    constructor(x, y, ind) {

        super(x, y, ind);
        this.ker = 5;
        this.energy = 2;


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
            [this.x + 1, this.y + 1]


        ];

    }
    chooseCell(character) {
        this.metod();
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
            matrix[newY][newX] = 4;

            this.y = newY;
            this.x = newX;
            for (var i in kendaniArr) {
                if (newX == kendaniArr[i].x && newY == kendaniArr[i].y) {
                    kendaniArr.splice(i, 1)
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
            if (this.energy == 0) {
                this.die();
            }

        }
    }


    krvel() {
        var emptyCells = this.chooseCell(3);
        var newCell = random(emptyCells);
        if (newCell) {
            for (var i in gishatichArr) {
                if (newCell[0] == gishatichArr[i].x && newCell[1] == gishatichArr[i].y) {
                    var enemy = gishatichArr[i];


                }

            }


            //console.log("kendai energy = " + this.energy + "tshnami energy = " + enemy.energy);
            if (this.energy > enemy.energy) {
                this.energy += enemy.energy;

                var newX = newCell[0];
                var newY = newCell[1];
                matrix[this.y][this.x] = 0;
                matrix[newY][newX] = 4;

                this.y = newY;
                this.x = newX;
                for (var i in gishatichArr) {
                    if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                        // console.log('tshnamin merav');
                        gishatichArr.splice(i, 1);
                        var enemy = gishatichArr[i];
                        break;
                    }
                }

            }
            else {

                this.die();

            }


        }

    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in kendaniArr) {
            if (this.x == kendaniArr[i].x && this.y == kendaniArr[i].y) {
                //console.log('es mera');
                kendaniArr.splice(i, 1);
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


            var newkendani = new kendani(newX, newY, this.index);
            kendaniArr.push(newkendani);
            matrix[newY][newX] = 4;

        }
    }

}