var LivingCreature = require("./class.livingcreature")
module.exports = class veracnox extends LivingCreature {
    constructor(x, y, ind) {
        super(x, y, ind);

       

    }

    
    eat() {
        var x1 = 0;
        var y1 = 0;
        var matrix = [];
        var gishatichArr = [];



        for (var x1, y1; x1 < matrix.length; x1++ , y1++) {
            if (matrix[y1][x1] == 3) {
                matrix[y1][x1] = 5;


            }
        } for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
                this.y = y1;
                this.x = x1;

                break;


            }
        }


    }
}