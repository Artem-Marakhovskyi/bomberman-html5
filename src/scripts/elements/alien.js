function Alien(x, y, size) {
    var image =  new Image();
    image.src='images/alien.png';
    image.onload = function() {
        ctx.drawImage(image, x, y, size, size);
    }
}