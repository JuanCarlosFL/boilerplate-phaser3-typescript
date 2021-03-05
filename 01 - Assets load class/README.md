# Phaser 3 TypeScript Project Template

```BASH
npm install
```
Modify game.ts

```JAVASCRIPT
import 'phaser';
import config from './configuration';

+ export class Game extends Phaser.Game {
+     constructor(config: Phaser.Types.Core.GameConfig) {
+         super(config);
+     }
+ }

window.addEventListener('load', () => {
-     const game = new Phaser.Game(config);      
+     const game = new Game(config);
});
```

In configuration.ts add import for Load module and config the load frist before Scene1

```JAVASCRIPT
import Scene1 from './scenes/scene1';
+ import Load from './scenes/load';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
-     scene: [Scene1],
+     scene: [Load, Scene1]
};

export default config;
``` 

Scene for load the assests and show progress bar


```JAVASCRIPT
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
```