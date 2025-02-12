import  Phaser from '../lib/phaser.js';
import { SCENE_KEYS } from './scene-keys.js';
import {
    BATTLE_BACKGROUNDS_ASSET_KEYS,
    MONSTER_ASSET_KEYS,
    BATTLE_ASSET_KEYS,
    HEALTH_BAR_ASSET_KEYS
} 
from '../assets/asset-keys.js';

export class PreloadScene extends Phaser.Scene {
    constructor () {
        super ({
            key: SCENE_KEYS.PRELOAD_SCENE,
            //active: true,
        });
        console.log(SCENE_KEYS.PRELOAD_SCENE)
    }
    
    preload() {
        console.log (`[${PreloadScene.name}:preload] invoked`)

        const monstTamerAssetPath = 'assets/images/monster-tamer'
        const kenneysAssetPath = 'assets/images/kenneys-assets'

        //backgrounds

        this.load.image(BATTLE_BACKGROUNDS_ASSET_KEYS.FOREST,
         `${monstTamerAssetPath}/battle-backgrounds/forest-background.png` );

         //assets battle

        this.load.image(BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,
            `${kenneysAssetPath}/ui-space-expansion/custom-ui.png`);

            //health bar assets
        this.load.image(HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`);

        this.load.image(HEALTH_BAR_ASSET_KEYS.MIDDLE,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`);

        this.load.image(HEALTH_BAR_ASSET_KEYS.LEFT_CAP,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`);

            //monster assets
            this.load.image(MONSTER_ASSET_KEYS.CARNODUSK,
                `${monstTamerAssetPath}/monsters/carnodusk.png` );

            this.load.image(MONSTER_ASSET_KEYS.IGUANIGNITE,
                `${monstTamerAssetPath}/monsters/iguanignite.png` );
    }
    create() {
        console.log (`[${PreloadScene.name}:create] invoked`)
     this.scene.start(SCENE_KEYS.BATTLE_SCENE);

    }
    update() {
        console.log('update');
    }
} 