class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;
    coins = 0;
    bottles = 0;
    moveDirection;
    gravitation;


    /**
     * calculated the colliding
     * @param {string} mo 
     * @returns numbers
     */
    isColliding(mo) {// Errechnet die Collision
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }



    /**
     * if something is hit energy go down
     */
    hit(damage) {
        this.energy -= damage;// Es werden immer 5 von der Variablen energy abgezogen
        if (this.energy < 0) {// checkt ob energy kleiner als 0 ist
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * check if someone is hurt
     * @returns the last hit
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;//Differenz in ms
        timepassed = timepassed / 1000; // Different in s
        return timepassed < 1;
    }

    /**
     * check if someone is dead
     * @returns the value of enegry
     */
    isDead() {
        return this.energy == 0;// Ist die Variable energy 0 wird der Wert true zurückgegeben ansonsten false
    }

    /**
     * someone is dead if energy is 0
     */
    kill() {
        this.energy = 0;
    }

    /**
     * the value to move right
     */
    moveRight() {
        this.x += this.speed;
    }


    /**
     * the value to move left
     */
    moveLeft() {
        this.x -= this.speed;
    }


    /**
     * start to play the animations
     * @param {string} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;// % = Modular und gibt immer den Rest wieder => i = 1 % 6; => 0, Rest 1 => i = 0,1,2,3,4,5,0,1,....
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * check the gravity 
     */
    applyGravity() {
        this.gravitation = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 25);
    }


    /**
     * check that is nothing on groung
     * @returns thats nothing on ground
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) { // ThrowableObjects should always fall
            return this.y < 365;
        } else {
            return this.y < 180;
        }

    }

    /**
     * let someone jump
     */
    jump() {
        this.speedY = 25;
    }


    isStamping(mo) {
        return this.isLanding() && (this.getBottomPos() + 29) - mo.getTopPos();
    }


    isLanding() {
        return this.speedY < 0 && this.isAboveGround();
    }


    getBottomPos() {
        return this.y + this.height;
    }
    

    getTopPos() {
        return this.y;
    }


}