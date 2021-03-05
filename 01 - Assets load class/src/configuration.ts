import Scene1 from './scenes/scene1';
import Load from './scenes/load';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: [Load, Scene1]
};

export default config;