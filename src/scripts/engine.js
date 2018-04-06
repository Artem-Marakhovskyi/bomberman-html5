function Engine() {
    this.cycle = function () {
        player.cycle();
        for(var i = 0; i< aliens.length; i++) {
            aliens[i].cycle();
        }
    } 
}