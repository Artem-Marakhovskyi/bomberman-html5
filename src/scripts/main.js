var gameConstants;
var fieldConstants;
var colorConstants;
var gameHolder;
var ctx;
var stages;
var directionConstants;
var engine;
var player;
var inputHandler;

window.onload = function () {
    stages = new Stages();
    engine = new Engine();
    directionConstants = new DirectionConstants();
    gameConstants = new GameConstants();
    fieldConstants = new FieldConstants();
    colorConstants = new ColorConstants();
    gameHolder = document.getElementById('gameHolder');
    ctx = gameHolder.getContext('2d');
    
    var inputHandler = new InputHandler(gameHolder);

    var field = new Field();
    field.drawBorder();
    field.drawStage(stages.stage1);

    new Game().start();
}