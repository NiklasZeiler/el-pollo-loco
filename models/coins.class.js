class Coins extends MovableObject {


    y = 350;
    height = 150;
    width = 150;
    

    IMAGES_COINS = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ]



    constructor() {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_COINS);
        this.x = 300 + Math.random() * 2000;
        this.y = 250 - Math.random() * 300;

    }
}