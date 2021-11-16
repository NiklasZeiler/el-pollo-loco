class Bottles extends DrawableObject {

    y = 350;
    height = 100;
    width = 100;
    x = 100;
    static lastBottlesPosX = -200;


    constructor() {
        super().loadImage('img/6.botella/1.Marcador.png');
        this.x = Bottles.lastBottlesPosX + Math.random() * 2000;
        Bottles.lastBottlePosX = this.x;
        this.y = 350 - Math.random() * 250;
    }
}
