/* import { Scene } from "phaser"; */
import phaser from "./lib/phaser.js";
import { PreloadScene } from './scenes/preload-scene.js';
import { SCENE_KEYS } from './scenes/scene-keys.js';
import { BattleScene } from './scenes/battle-scene.js';
import  { ScenePerso } from './scenes/perso-sc.js' ;

const game = new Phaser.Game({
    type: Phaser.AUTO,
    pixelArt: false,
    scale: {
        parent: 'game-container',
        width: 1024,
        height: 576,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    // backgroundColor: '#000000',
   
     
});

game.scene.add(SCENE_KEYS.PRELOAD_SCENE, ScenePerso);
game.scene.add(SCENE_KEYS.BATTLE_SCENE, BattleScene)
game.scene.start(SCENE_KEYS.PRELOAD_SCENE)
 