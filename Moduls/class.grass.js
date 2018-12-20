var LivingCreature = require("./class.livingcreature")
module.exports = class Grass extends LivingCreature{


    mul(matrix) {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells, matrix);

        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Grass(newX, newY, this.index);
            this.multiply = 0;
        }
    }
}
function random(arr){
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}