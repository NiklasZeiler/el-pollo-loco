class Cloud extends MovableObject {

    y = 50;
    height = 250;
    width = 500;

    IMAGES_MOVE = [
        'img/5.Fondo/Capas/4.nubes/1.png',
        'img/5.Fondo/Capas/4.nubes/2.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_MOVE[0]);
        this.loadImages(this.IMAGES_MOVE)
        this.x = Math.random() * 2000;
        this.animate();
    }

    /**
     * animate the coluds
     */
    animate() {
        setInterval(() => { this.moveLeft() }, 1000 / 60);
    }
}