function DirectionConstants() {
    this.NOTHING = 0;
    this.UP = 1;
    this.DOWN = 2;
    this.RIGHT = 3;
    this.LEFT = 4;

    this.random = function() {
        return Math.floor(Math.random() * 4 + 1);
    }
}