class Chicken extends MovableObject {

    y = 360;
    width = 60;
    height = 80;
    energy = 5;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    IMAGES_CHICKEN_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ]

    clucking_chicken = new Audio('audio/chicken.mp3');


    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_CHICKEN_DEAD);


        this.x = 500 + Math.random() * 1500;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();

    }


    /**
     * animate the chicken
     */
    animate() {
        this.moveChicken = setInterval(() => {//Alles was zwischen den Klammern steht wird 60 mal pro Sekunde ausgeführt
            this.moveLeft();
            this.sound();
        }, 1000 / 60);
        setInterval(() => {
            if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_CHICKEN_DEAD);
                clearInterval(this.moveChicken);
            }
        }, 200);




    }


    /**
     * play the sound from chicken
     */
    sound() {
        this.clucking_chicken.play();
        this.clucking_chicken.loop = true;
        this.clucking_chicken.volume = 0.1;
    }
}