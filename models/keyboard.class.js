class Keyboard {
    LEFT = false;
    RIGHT = false;
    SPACE = false;
    E = false;

    constructor() {
        /**
         * check if keys are down
         */
        window.addEventListener("keydown", (e) => {// Sobald eine Taste gedrückt wird gibt es ein Event hier wird ausgegeben welche Taste gedrückt wird
            if (e.keyCode == 39 || e.keyCode == 68) {// Pfeil Rechts oder Taste D werden gedrückt 
                this.RIGHT = true;// Ist eine von den Tasten gedrückt ändert sich die Variable keyboard in true
            }
            if (e.keyCode == 37 || e.keyCode == 65) {// Pfeil links oder Taste A
                this.LEFT = true;
            }
            if (e.keyCode == 69) {// Taste E
                this.E = true;
            }
            if (e.keyCode == 32) { // Leertaste
                this.SPACE = true;
            }
        }, false);


        /**
         *  check if keys are up
         */
        window.addEventListener("keyup", (e) => {// Sobald eine Taste losgelassen wird gibt es ein Event
            if (e.keyCode == 39 || e.keyCode == 68) {
                this.RIGHT = false;//Die Variable keyboard wird wieder auf false gesetzt
            }
            if (e.keyCode == 37 || e.keyCode == 65) {
                this.LEFT = false;
            }
            if (e.keyCode == 69) {
                this.E = false;
            }
            if (e.keyCode == 32) {
                this.SPACE = false;
            }
        }, false);
    }

}