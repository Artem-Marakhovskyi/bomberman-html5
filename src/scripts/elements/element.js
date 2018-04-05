function Element(x, y, size) {
    var image =  new Image();
    image.src='images/brick.png';
    image.onload = function() {
        ctx.drawImage(image, x, y, size, size);
    }
}