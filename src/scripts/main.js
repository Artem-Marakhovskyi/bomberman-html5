var gameConstants;
var fieldConstants;
var colorConstants;
var gameHolder;
var ctx;
var stages;
var directionConstants;
var engine;
var player;
var aliens = [];
var inputHandler;
var collisionResolver;
var field;
var elementConstants;

window.onload = function () {
    stages = new Stages();
    engine = new Engine();
    directionConstants = new DirectionConstants();
    elementConstants = new ElementConstants();
    gameConstants = new GameConstants();
    fieldConstants = new FieldConstants();
    colorConstants = new ColorConstants();
    gameHolder = document.getElementById('gameHolder');
    ctx = gameHolder.getContext('2d');
    
    var inputHandler = new InputHandler(this.document.getElementsByTagName('body')[0]);
    
    field = new Field();
    field.drawBorder();
    field.drawStage(stages.stage1);
    collisionResolver = new CollisionResolver();

    new Game().start();
}