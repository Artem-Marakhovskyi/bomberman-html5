function Alien(x, y, size, stablePositionX, stablePositionY) {
    var direction = directionConstants.random();

    var currentFieldX = x;
    var currentFieldY = y;
    var currentSpeed = 4;
   
    var figureSize = size;
    var image =  new Image();
    image.src='images/alien.png';
    image.onload = function() {
        ctx.drawImage(image, x, y, size, size);
    }

    this.xPosition = stablePositionX;
    this.yPosition = stablePositionY;

    this.cycle = function() {

        var movementObject = canMove();
        if (!movementObject.canMove) {
            direction = directionConstants.random();
            
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
            elementConstants.ALIEN);    
        if (updateObject.updated) {
                this.xPosition = updateObject.newX;
                this.yPosition = updateObject.newY;
            }
        currentFieldX = movementObject.x;
        currentFieldY = movementObject.y;

        ctx.drawImage(image, currentFieldX, currentFieldY, size, size);               
    }
    
    
    function canMove() {
        var intentionX = currentFieldX;
        var intentionY = currentFieldY;
        var canMove = false;

        switch(direction)
        {
            case directionConstants.UP: 
                intentionY -= currentSpeed;
                canMove = collisionResolver.canMoveTo(intentionX, intentionY, figureSize, elementConstants.ALIEN);
                break;
            case directionConstants.DOWN:
                intentionY += currentSpeed;
                canMove = collisionResolver.canMoveTo(intentionX, intentionY, figureSize, elementConstants.ALIEN);
                break;
            case directionConstants.LEFT:
                intentionX -= currentSpeed;
                canMove = collisionResolver.canMoveTo(intentionX, intentionY, figureSize, elementConstants.ALIEN);
                break;
            case directionConstants.RIGHT:
                intentionX += currentSpeed;
                canMove = canMove = collisionResolver.canMoveTo(intentionX, intentionY, figureSize, elementConstants.ALIEN);
                break;                
        }
        return {
                canMove: canMove,
                x: parseInt(intentionX),
                y: parseInt(intentionY)
            };
    }
}