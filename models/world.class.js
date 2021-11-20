class World {
    character = new Character();
    endboss = new Endboss();
    level = getLevel1();
    ctx;
    keyboard = new Keyboard();
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    statusBarEndboss = new StatusBarEndboss();
    camera_x = 0;
    throwableObjects = [];
    gameOver = 0;
    winning_sound = new Audio('audio/win.mp3');
    game_finished = false;
    game_lost = false;
    youWin = new YouWon();
    youLost = new YouLost();
    hurt_sound = new Audio('audio/hurt.mp3');

    constructor() {
        this.ctx = canvas.getContext('2d');
        this.canvas = document.getElementById('canvas');//Übergibt das Element mit dem Inahlt Canvas an die Variable 
        this.draw();
        this.setWorld();
        this.run();
        this.checkThrowObjects();

    }


    /**
     * values of character are compatibal with world class
     */
    setWorld() {
        this.character.world = this;//Es wird nur this übergeben damit in der Klasse Charakter die Instanz world zur verfügung steht
    }



    /**
     * check functions with moves
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 20);
    }


    /**
     * if endboss is dead we change the value in true
     */
    finishLevel() {
        this.winning_sound.play();
        this.game_finished = true;
    }


    lostLevel() {
        this.game_lost = true;
    }



    /**
     * check if an object is throwable and count this one
     */
    checkThrowObjects() {
        let lastThrow = new Date().getTime();
        setInterval(() => {
            if (this.keyboard.E
                && this.character.throwBottle > 0
                && this.timeSinceLastThrow(lastThrow)) {
                let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100, this.character.otherDirection);
                this.throwableObjects.push(bottle);
                this.character.looseBottles();
                this.bottleBar.setPercentage(this.character.bottles);
                lastThrow = new Date().getTime();
            }
        }, 1000 / 60);

    }

    /**
     * Check time since last throw you can only throw one bottle everyx second
     * @param {number} lastThrow 
     * @returns 
     */
    timeSinceLastThrow(lastThrow) {
        return new Date().getTime() - lastThrow > 1000;
    }


    /**
     * check the collision between objects
     */
    checkCollisions() {
        this.checkCollisionsWithEnemies();
        this.checkCollisionWithCoins();
        this.checkCollisionWithBottles();
        this.checkBottleCollisionWithEnemy();
        this.checkBottleCollisionWithBoss();
        // this.checkCollisionsWithEnemiesFromTop();
    }



    /**
     * check collision with coins
     */
    checkCollisionWithCoins() {
        this.level.coins.forEach((coins, index) => {
            if (this.character.isColliding(coins)) {
                this.character.pickUpCoins();
                this.level.coins.splice(index, 1);
                this.coinBar.setPercentage(this.character.coins);
            }
        });
    }


    /**
     * check collision with bottles
     */
    checkCollisionWithBottles() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.character.pickUpBottles();
                this.level.bottles.splice(index, 1);
                this.bottleBar.setPercentage(this.character.bottles);
            }
        });
    }


    /**
     * check collision with enemies 
     */
    checkCollisionsWithEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (!(this.character.isDead() || enemy.isDead()) && this.character.isColliding(enemy)) {
                if (this.character.isStamping(enemy)) {
                    enemy.kill();
                    let position = this.level.enemies.indexOf(enemy);
                    this.level.enemies.splice(position, 1);
                } else {
                    this.character.hit(3);
                    this.hurt_sound.play();
                    this.hurt_sound.volume = 0.2;
                    console.log(this.character.energy);
                    this.statusBar.setPercentage(this.character.energy);

                }
            } if (enemy instanceof Endboss) {
                if (this.character.isColliding(this.endboss)) {
                    this.character.hit(30);
                    this.hurt_sound.play();
                    this.hurt_sound.volume = 0.2;
                    this.statusBar.setPercentage(this.character.energy);

                }
            }
        }, 2000);
    }


    /**
     * cheks if a bottle is colliding with boss and splash it
     */
    checkBottleCollisionWithBoss() {
        this.throwableObjects.forEach((bottle) => {
            let endboss = this.level.enemies[this.level.enemies.length - 1];
            if (endboss.isColliding(bottle) && !endboss.isHurt()) {
                endboss.hit(20);
                this.statusBarEndboss.setPercentage(endboss.energy);
                bottle.bottleIsCracked = true;
                setTimeout(() => {
                    let position = this.throwableObjects.indexOf(bottle);
                    this.throwableObjects.splice(position, 1);
                }, 200);
                if (endboss.isDead() && this.gameOver == 0) {
                    setTimeout(() => {
                        this.gameOver = new Date().getTime();
                        this.finishLevel();
                    }, 1000);

                }
            }
        });
    }

    /**
     * Check bottle collision with the chicken and splash
     */
    checkBottleCollisionWithEnemy() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy instanceof Chicken) {
                    if (!enemy.isDead()) {
                        if (bottle.isColliding(enemy)) {
                            enemy.kill();
                            bottle.bottleIsCracked = true;
                            this.deleteBottlesAndChicken(bottle, enemy);
                        }
                    }
                }
            });
        });
    }

    /**
     * delete the bottle and chicken from array and delete this from canvas
     * @param {number} bottle - 
     * @param {number} enemy 
     */
    deleteBottlesAndChicken(bottle, enemy) {
        setTimeout(() => {
            let position = this.throwableObjects.indexOf(bottle);
            this.throwableObjects.splice(position, 1);
        }, 150);
        setTimeout(() => {
            let position = this.level.enemies.indexOf(enemy);
            this.level.enemies.splice(position, 1);
        }, 1500);
    }


    /**
     * draw objects on canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        //-------Space for fixed setups----------

        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);

        //---------Space for fixed setups end--------
        if (this.game_finished) {
            this.addToMap(this.youWin);
        } else if (this.game_lost) {
            this.addToMap(this.youLost);
        } else {
            this.ctx.translate(this.camera_x, 0);
            this.addObjectsToMap(this.level.coins);
            this.addObjectsToMap(this.level.bottles);
            this.addObjectsToMap(this.throwableObjects);
            this.addObjectsToMap(this.level.enemies);
            this.addToMap(this.statusBarEndboss);

            this.addToMap(this.character);

            this.ctx.translate(-this.camera_x, 0);

            let self = this;//draw() wird immer wieder aufgerufen
            requestAnimationFrame(function () {
                self.draw();
            })
        }

    }

    /**
     * add objects to map
     * @param {string} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    /**
     * add movable objects to map
     * @param {string} mo 
     */
    addToMap(mo) {
        if (mo.otherDirection) {// Prüft ob das Objekt was eingefügt wird eine andere Richtung hat
            this.flipImage(mo);

        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {// Prüft ob das Objekt was eingefügt wurde wieder in der standard Richtung ist
            this.flipImageBack(mo);
        }
    }


    /**
     * flip image when change the direction
     * @param {string} mo 
     */
    flipImage(mo) {
        this.ctx.save();// wenn ja dann werden die aktuellen Einstellungen gespeichert
        this.ctx.translate(mo.width, 0);//ändert die Methode wie die Bilder eingefügt werden
        this.ctx.scale(-1, 1);//Es wird alles gespiegelt auf der x Achse
        mo.x = mo.x * - 1;// X Koordinate wird umgedreht
    }


    /**
     * flip image back if direction is normal
     * @param {string} mo 
     */
    flipImageBack(mo) {
        mo.x = mo.x * - 1;
        this.ctx.restore();//wenn ja wird die Spiegelung wird wieder rückgängig gemacht
    }



}