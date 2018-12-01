class veracnox {
    constructor(x, y, ind) {
        this.x = x;
        this.y = y;
        this.index = ind;
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


    eat() {
        var x1 = 0;
        var y1 = 0;
for(var x1 , y1 ; x1 < matrix.length; x1++, y1++ ){
    if(matrix[y1][x1] == 3  ){
         matrix[y1][x1] = 5;
 
    
    }
}            for (var i in gishatichArr) {
                 if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                   gishatichArr.splice(i, 1);
                   this.y  = y1;
                   this.x = x1;
                   
                 break;


    }
}


    }
}