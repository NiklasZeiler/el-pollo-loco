class StatusBarEndboss extends DrawableObject {

    IMAGES_HEALTH = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_copia.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_copia 2.png'

    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 2600;
        this.y = 0;
        this.width = 180;
        this.height = 50;
        this.setPercentage(100);
    }


    /**
    * show the images 
    * @param {number} percentage 
    */
    setPercentage(percentage) {
        this.percentage = percentage;// => 0....5
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
    * check which image is show
    * @returns a number 
    */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}