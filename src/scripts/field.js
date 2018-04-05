function Field() {
    this.currentField = [];
    this.cellSize;

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
        cellSize = gameHolder.width / arrayOfArrays.length;
        
        for(var r = 0; r < arrayOfArrays.length; r++) {
            var newRow = arrayOfArrays[r].slice();
            this.currentField.push(newRow);
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

    this.tryUpdatePosition = function(fromX, fromY, toX, toY, who) {
        
        if (toX % cellSize !== 0 || toY % cellSize !== 0) return false;

        var elementType = this.getElementType(fromX, fromY);
        var newElementType = this.getElementType(toX, toY);

        switch (who) {
            case elementConstants.BOMBERMAN: 
                return this.updatePositionForBomberman(elementType, newElementType, fromX, fromY, toX, toY);
                break;
            case elementConstants.ALIEN: 
                return this.updatePositionForAlien(elementPosition, newElementType, fromX, fromY, toX, toY);
                break;
        }

        throw new Error('Not valid Subject of invocation');
    }

    this.getCellPosition = function(coord) {
        return Math.floor(coord / cellSize);
    }

    this.getElementType = function(x,y) {
        var cellX = this.getCellPosition(x);
        var cellY = this.getCellPosition(y);
        var elementType = this.currentField[cellY][cellX];
        return elementType;
    }

    this.updatePositionForBomberman = function(elementType, newElementType, x, y, oldX, oldY) {
        if (elementType === newElementType) return false;

        switch (newElementType){
            case elementConstants.EMPTY:
            this.currentField[this.getCellPosition(y)][this.getCellPosition(x)] = elementConstants.BOMBERMAN;
            this.currentField[this.getCellPosition(oldY)][this.getCellPosition(oldX)] = elementConstants.EMPTY;
                break;
            case elementConstants.ALIEN:
                alert('GAME OVER');
                break;
        }

        return true;
    }

    this.updatePositionForAlien = function(elementType, newElementType, x, y, oldX, oldY) {
        this.currentField[this.getCellPosition(y)][this.getCellPosition(x)] = elementConstants.ALIEN;
        this.currentField[this.getCellPosition(oldY)][this.getCellPosition(oldX)] = elementConstants.EMPTY;

        return true;
    }
}