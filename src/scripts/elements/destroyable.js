function Destroyable(x, y, size) {
    var image =  new Image();
    image.src='images/destroyable.png';
    image.onload = function() {
        ctx.drawImage(image, x, y, size, size);
    }
}