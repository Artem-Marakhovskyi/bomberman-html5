
function Bomberman(x, y, size, stablePositionX, stablePositionY) {
    var direction = directionConstants.NOTHING;
    var isGoing = false;

    var figureHeight = 75;
    var figureWidth = 50;
    var figureSize = size;

    var currentFieldX = x;
    var currentFieldY = y;
    var currentSpeed = 1;

    this.xPosition = stablePositionX;
    this.yPosition = stablePositionY;

    var image =  new Image();
    image.src='images/bomberman.png';
    image.onload = function() {
        ctx.drawImage(
            image, 
            0, 
            0, 
            figureWidth,
            figureHeight, 
            currentFieldX, 
            currentFieldY, 
            size, 
            size);
    };

    this.cycle = function() {

        if(!isGoing) return false;

        var movementObject = canMove();
        if (!movementObject.canMove) {
            isGoing = false;
            direction = directionConstants.NOTHING;
            return;
        }

        ctx.clearRect(
            currentFieldX, 
            currentFieldY, 
            size, 
            size); 
            
        var updateObject = field.tryUpdatePosition(
            this.xPosition, this.yPosition,
            movementObject.x, movementObject.y,
            elementConstants.BOMBERMAN);    
        if (updateObject.updated) {
                isGoing = false;
                direction = directionConstants.NOTHING;

                this.xPosition = updateObject.newX;
                this.yPosition = updateObject.newY;
            }
        currentFieldX = movementObject.x;
        currentFieldY = movementObject.y;

        ctx.drawImage(image, 0, 0, figureWidth, figureHeight, currentFieldX, currentFieldY, size, size);            
        
    }

    this.changeDirection = function (newDirection) {
        if (!isGoing) {
            direction = newDirection;
            isGoing = true;
        }
    }

    function canMove() {
        var intentionX = currentFieldX;
        var intentionY = currentFieldY;
        var canMove = false;

        switch(direction)
        {
            case directionConstants.UP: 
                intentionY -= currentSpeed;
                canMove = collisionResolver.canMoveTo(intentionX, intentionY, figureSize);
                break;
            case directionConstants.DOWN:
                intentionY += currentSpeed;
                canMove = collisionResolver.canMoveTo(intentionX, intentionY, figureSize);
                break;
            case directionConstants.LEFT:
                intentionX -= currentSpeed;
                canMove = collisionResolver.canMoveTo(intentionX, intentionY, figureSize);
                break;
            case directionConstants.RIGHT:
                intentionX += currentSpeed;
                canMove = canMove = collisionResolver.canMoveTo(intentionX, intentionY, figureSize);
                break;                
        }
        return {
                canMove: canMove,
                x: parseInt(intentionX),
                y: parseInt(intentionY)
            };
    }
}