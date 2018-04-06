function CollisionResolver() {
    this.canMoveTo = function(x, y, figureSize, elementType) {
        var topLeft = field.getElementType(x, y);
        if (!allowedElementType(topLeft, elementType)) {
            console.log('not allowed by top left')
            return false;
        }

        var topRight = field.getElementType(x + figureSize - 1, y);
        if (!allowedElementType(topRight, elementType)) {
            console.log('not allowed by top right')
            return false;
        }

        var bottomLeft = field.getElementType(x, y + figureSize - 1);
        if (!allowedElementType(bottomLeft, elementType)) {
            console.log('not allowed by bottom left')
            return false;
        }

        var bottomRight = field.getElementType(x + figureSize - 1, y + figureSize - 1);
        if (!allowedElementType(bottomRight, elementType)) {
            console.log('not allowed by bottom right')
            return false;
        }

        return true;
    }

    function allowedElementType(elementType, fromElement) {
        if (fromElement === elementConstants.BOMBERMAN)
            return elementType === elementConstants.EMPTY 
                || elementType === elementConstants.BOMBERMAN 
                || elementType === elementConstants.FINISH;
        else  
            return elementType === elementConstants.EMPTY 
                || elementType === elementConstants.BOMBERMAN 
                || elementType === elementConstants.ALIEN;

    }


}