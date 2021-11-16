function getLevel1() {
    return new Level(

        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Endboss()
        ],

        [
            new Cloud(200, 150),
            new Cloud(700, 350),
            new Cloud(1100, 150),
            new Cloud(1500, 350),
            new Cloud(1800, 150)
        ],
        [
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 4),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 4),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 4),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 4)

        ],
        [
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins()

        ],
        [
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles(),
            new Bottles()

        ]
    );

}
