class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;
    constructor(imagePath, x) {//Der construktor erzeugt und initaliesiert Objekte die mit dem Schlüsselwort class erzeugt wurden
        super().loadImage(imagePath);// Mit dem Schlüselwoirt super greift man auf die Elternklasse zu
        this.x = x;
        this.y = 480 - this.height;
    }
}