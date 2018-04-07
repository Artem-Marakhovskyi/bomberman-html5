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
var log;

window.onload = function () {
    stages = new Stages();
    engine = new Engine();
    directionConstants = new DirectionConstants();
    elementConstants = new ElementConstants();
    gameConstants = new GameConstants();
    fieldConstants = new FieldConstants();
    colorConstants = new ColorConstants();
    gameHolder = document.getElementById('gameHolder');
    log = document.getElementById('log');
    ctx = gameHolder.getContext('2d');
    var inputHandler = new InputHandler(this.document.getElementsByTagName('body')[0]);
    
    field = new Field();
    field.drawBorder();
    field.drawStage(stages.stage1);
    collisionResolver = new CollisionResolver();
    

    new Game().start();
}

function showArray() {
    var tableLog = document.getElementById("log");
    while (tableLog.firstChild) {
        tableLog.removeChild(tableLog.firstChild);
    }
    var tbdy = document.createElement('tbody');
    for (var r = 0; r < field.currentField.length; r++) {
        var tr = document.createElement('tr');
        for (var c = 0; c < field.currentField[0].length; c++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(field.currentField[r][c]));
            tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
    log.appendChild(tbdy);
}