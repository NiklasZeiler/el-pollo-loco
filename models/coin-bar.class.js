class CoinBar extends DrawableObject {

    IMAGES_COINBAR = [
        'img/7.Marcadores/Barra/Marcador moneda/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/20_  copia.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/40_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/60_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/80_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/100_ copia 2.png'

    ];

    percentage = 9;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.x = 250;
        this.y = 0;
        this.width = 180;
        this.height = 50;
        this.setPercentage(0);
    }


    /**
    * show the images 
    * @param {number} percentage 
    */
    setPercentage(percentage) {
        this.percentage = percentage;// => 0....5
        let path = this.IMAGES_COINBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
    * check which image is show
    * @returns a number 
    */
    resolveImageIndex() {
        if (this.percentage >= 9) {
            return 5;
        } else if (this.percentage >= 7) {
            return 4;
        } else if (this.percentage >= 5) {
            return 3;
        } else if (this.percentage >= 3) {
            return 2;
        } else if (this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }
}