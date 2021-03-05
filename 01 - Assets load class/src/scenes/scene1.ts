
export default class Scene1 extends Phaser.Scene
{
    constructor ()
    {
        super('Scene1');
    }

    preload ()
    { 
    }

    create ()
    {
        const logo = this.add.image(400, 70, 'logo');
    }
}
