class BottleBar extends DrawableObject {

    IMAGES_BOTTLE = [
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/100_.png'
    ];


    percentage = 15;

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 500;
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
        let path = this.IMAGES_BOTTLE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * check which image is show
     * @returns a number 
     */
    resolveImageIndex() {
        if (this.percentage >= 15) {
            return 5;
        } else if (this.percentage >= 12) {
            return 4;
        } else if (this.percentage >= 9) {
            return 3;
        } else if (this.percentage >= 6) {
            return 2;
        } else if (this.percentage >= 2) {
            return 1;
        } else {
            return 0;
        }
    }
}