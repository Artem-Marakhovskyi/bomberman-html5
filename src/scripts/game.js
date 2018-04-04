import { GameConsants } from "./constants/game-constants";
import { FieldConstants } from "./constants/field-constants";

export class Game {

    constructor() {

    }

    start() {
        this.prepareField();
    }    

    prepareField() {
        var gameHolder = document.getElementById('gameHolder');
        var ctx = gameHolder.getContext('2d');

        gameHolder.width  = GameConsants.SIZE_PX;
        gameHolder.height = GameConsants.SIZE_PX;
        ctx.strokeRect(0,0, FieldConstants.SIZE_PX, FieldConstants.SIZE_PX);
        ctx.strokeRect(18, 18, 260, 260);
        ctx.fillRect(20, 20, 256, 256);
            
        for (var i = 0; i < 8; i += 2) {
            for (var j = 0; j < 8; j += 2) {
                ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
                ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
            }
        }
    }
}

