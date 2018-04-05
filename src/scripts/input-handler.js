function InputHandler(body) {

    body.onkeydown = handle;


    function handle(e) {
        var code = e.code;

        switch(code)
        {
            case 'ArrowLeft':
                player.changeDirection(directionConstants.LEFT);
                break;
            case 'ArrowRight':
                player.changeDirection(directionConstants.RIGHT);
                break;
            case 'ArrowUp':
                player.changeDirection(directionConstants.UP);
                break;
            case 'ArrowDown':
                player.changeDirection(directionConstants.DOWN);
                break;
        }
    }
}