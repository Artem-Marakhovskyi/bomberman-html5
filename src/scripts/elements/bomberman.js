
function Bomberman(x, y, size) {
    var direction = directionConstants.NOTHING;
    
    var figureHeight = 75;
    var figureWidth = 50;

    var currentFieldX = 0;
    var currentFieldY = 0;
    var currentSpeed = 3;

    var image =  new Image();
    image.src='images/bomberman.png';
    image.onload = function() {
        ctx.drawImage(image, currentFieldX, currentFieldY, figureWidth, figureHeight, x, y, size, size);
    };

    this.cycle() = function() {
        ctx.clearRect(
            currentFieldX, 
            currentFieldY, 
            size, 
            size); 

        switch(direction)
        {
            case directionConstants.UP: 
                currentFieldY -= currentSpeed;
                break;
            case directionConstants.DOWN:
                currentFieldY += currentSpeed;
                break;
            case directionConstants.LEFT:
                currentFieldX -= currentSpeed;
                break;
            case directionConstants.RIGHT:
                currentFieldX += currentSpeed;
                break;                
        }
        ctx.drawImage(image, currentFieldX, currentFieldY, figureWidth, figureHeight, x, y, size, size);            
    }
}