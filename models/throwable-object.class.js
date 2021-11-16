class ThrowableObject extends MovableObject {

    IMAGES_ROTATION = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];
    IMAGES_SPLASH = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];

    the_throw;
    bottleIsCracked = false;
    world;
    throw_sound = new Audio('audio/throw.mp3');
    splash_sound = new Audio('audio/glass.mp3');


    constructor(x, y, otherDirection) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_ROTATION);
        this.loadImages(this.IMAGES_SPLASH);
        this.otherDirection = otherDirection;
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 60;
        this.throwBottle();
    }

    /**
     * throw bottle in else direction
     */
    throwBottle() {
        if(this.otherDirection) {
            this.throwBottleLeft();
            this.throw_sound.play();
        } else {
            this.throwBottleRight();
            this.throw_sound.play();
        }
    }


    /**
     * throw a bottle to the right
     */
    throwBottleRight() {
        this.speedY = 30;
        this.applyGravity();
        this.the_throw = setInterval(() => {
            if (this.bottleIsCracked || !this.isAboveGround()) {
                this.splashBottle();
            } else
                this.playAnimation(this.IMAGES_ROTATION);
            this.x += 8;
        }, 25);
    }

    /**
     * throw bottle to the left
     */
    throwBottleLeft() {
        this.speedY = 30;
        this.applyGravity();
        this.the_throw = setInterval(() => {
            if (this.bottleIsCracked || !this.isAboveGround()) {
                this.splashBottle();
            } else
                this.playAnimation(this.IMAGES_ROTATION);
            this.x -= 8;
        }, 25);
    }



    splashBottle() {
        clearInterval(this.gravitation);
        clearInterval(this.the_throw);        
        this.playAnimation(this.IMAGES_SPLASH);
        this.splash_sound.play();
        setInterval(() => {
            this.width = 0;
            this.height = 0;
        }, 200);
    }


}