export default class Load extends Phaser.Scene {

    // Loader
    private loader: Phaser.GameObjects.Graphics;
    private progressLoader: Phaser.GameObjects.Graphics;

    constructor() {
        super('Load');
    }

    preload(): void {
        this.cameras.main.setBackgroundColor(0x000000);
        this.startLoader();

        // Listener while assets is loading
        this.load.on (
            'progress',
            function(value: number) {
                this.progressLoader.clear();
                this.progressLoader.fillStyle(0x125555, 1);
                this.progressLoader.fillRect(
                    this.cameras.main.width / 4,
                    this.cameras.main.height / 2 - 16,
                    (this.cameras.main.width / 2) * value,
                    16
                );
            },
            this
        );

        // Listener when assets loaded
        this.load.on(
            'complete',
            function () {
                this.scene.start('Scene1');
            },
            this
        );

        this.load.image('logo', 'assets/phaser3-logo.png'); 
    };



    /**
     * Create the progress bar
     */
    startLoader(): void {
        this.loader = this.add.graphics();
        this.loader.fillStyle(0xffffff, 1);
        this.loader.fillRect(
            this.cameras.main.width / 4 - 2,
            this.cameras.main.height / 2 - 18,
            this.cameras.main.width / 2 + 4,
            20
        );
        this.progressLoader = this.add.graphics();
    }

}