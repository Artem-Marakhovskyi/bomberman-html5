function Field() {
    this.draw = function() {
        gameHolder.width  = fieldConstants.SIZE_PX;
        gameHolder.height = fieldConstants.SIZE_PX;

        ctx.fillStyle=colorConstants.BLACK;
        ctx.fillRect(0, 0, fieldConstants.SIZE_PX, fieldConstants.SIZE_PX);

        ctx.fillStyle=colorConstants.WHITE;
        ctx.fillRect(
            fieldConstants.BORDER_WIDTH, 
            fieldConstants.BORDER_WIDTH, 
            fieldConstants.SIZE_PX - fieldConstants.BORDER_WIDTH*2, 
            fieldConstants.SIZE_PX - fieldConstants.BORDER_WIDTH*2); 



        
        // for (var i = 0; i < 8; i += 2) {
        //     for (var j = 0; j < 8; j += 2) {
        //         ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
        //         ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
        //     }
        // }
    }
}