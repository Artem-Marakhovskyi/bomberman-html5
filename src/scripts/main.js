var gameConstants;
var fieldConstants;
var colorConstants;
var gameHolder;
var ctx;

window.onload = function () {
    gameConstants = new GameConstants();
    fieldConstants = new FieldConstants();
    colorConstants = new ColorConstants();
    gameHolder = document.getElementById('gameHolder');
    ctx = gameHolder.getContext('2d');
    
    new Field().draw();
    new Game().start();
}