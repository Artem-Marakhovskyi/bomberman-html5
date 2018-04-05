function Field() {
    this.drawBorder = function() {
        gameHolder.width  = fieldConstants.SIZE_PX;
        gameHolder.height = fieldConstants.SIZE_PX;

        // ctx.fillStyle=colorConstants.BLACK;
        // ctx.fillRect(0, 0, fieldConstants.SIZE_PX, fieldConstants.SIZE_PX);

        // ctx.fillStyle=colorConstants.WHITE;
        // ctx.clearRect(
        //     fieldConstants.BORDER_WIDTH, 
        //     fieldConstants.BORDER_WIDTH, 
        //     fieldConstants.SIZE_PX - fieldConstants.BORDER_WIDTH*2, 
        //     fieldConstants.SIZE_PX - fieldConstants.BORDER_WIDTH*2); 
    }

    this.drawStage = function(arrayOfArrays) {
        ctx.fillStyle = colorConstants.GREEN;
        var cellSize = gameHolder.width / arrayOfArrays.length;
        
        for(var r = 0; r < arrayOfArrays.length; r++) {
            for (var c = 0; c < arrayOfArrays[0].length; c++) {
                switch (arrayOfArrays[r][c])
                { 
                    case 'B':
                        drawBomberman();
                        break;
                    case 'd':
                        drawDestroyable();
                        break;
                    case '_':
                        drawEmpty();
                        break;
                    case 'A':
                        drawAlien();
                        break;
                    case 'w':
                        drawWall();
                        break;
                }
            }
        }

        function drawEmpty() {
            
        }

        function drawWall() {
            new Wall(c * cellSize, r * cellSize, cellSize);
        }

        function drawAlien() {
            new Alien(c * cellSize, r * cellSize, cellSize);
        }

        function drawDestroyable() {
            new Destroyable(c * cellSize, r * cellSize, cellSize);
        }

        function drawBomberman() {
            player = new Bomberman(c * cellSize, r * cellSize, cellSize);
        }
    }
}