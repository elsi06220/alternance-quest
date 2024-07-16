 class ScenePerso extends Phaser.Scene{
constructor() {
    super({
        key : 'ScenePerso'
    })
}
preload()
{
this.load.image('sky', './assets/forest-background.png')
}

create()

{
this.add.image(400, 400, 'sky')
 }

 update()

 {

 }
}

const config = {
    type : Phaser.AUTO,
    width : 800,
    height : 600,
    Physics : {
        default : 'acarde', 
        arcade : {
            gravity : {
                y : 500

            },
            debug : false,

        }
    },
    scene : [ScenePerso ]



}

const game = new Phaser.Game(config) ;