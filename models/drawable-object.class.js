class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 380;
    width = 100;
    height = 150;

    /**
    * load one image into variable
    * @param {string} path 
    */
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image'), das ist beides das selbe nur das mit der Id das Bild direkt schon im HTML Teil gezeigt wird
        this.img.src = path;
    }

    /**
     * draw the images
     * @param {string} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
    * load an array into variable
    * @param {Array} arr -  array with images
    */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
     * draw frame over character and chicken
     * @param {string} ctx 
     */
    drawFrame(ctx) {
        if (this instanceof Chicken || this instanceof Endboss) {// instanceof prüft ob eine Eigenschaft von einer Überklasse vorhanden ist
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

}