function startScreen() {
    document.getElementById('startScreen').src = 'img/9.Intro _ Outro Image/Start Screen/Opción2.png'
}

/**
 * starts the game with a button
 */
function startGame() {
    let startScreen = document.getElementById('startScreen');
    init();
    canvas.classList.remove('d-none');
    startScreen.classList.add('d-none');
    showNewGameButton();
    hideButton();   
}

/**
 * hide the startgame button
 */
function hideButton() {
    let button = document.getElementById('StartButton');
    button.classList.add('d-none');
}


/**
 * let game into fullscreen
 */
function fullScreen() {
    canvas.requestFullscreen();
}