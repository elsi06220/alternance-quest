import  Phaser from '../lib/phaser.js';
import { SCENE_KEYS } from './scene-keys.js';
import {BATTLE_ASSET_KEYS, BATTLE_BACKGROUNDS_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS,} 
from '../assets/asset-keys.js';

export class BattleScene extends Phaser.Scene {
    constructor () {
        super ({
            key: SCENE_KEYS.BATTLE_SCENE,
            //active: true,
        });
        
    }
  
    create() {
        console.log (`[${BattleScene.name}:create] invoked`);
    /*     this.add
        .image(256,316, MONSTER_ASSET_KEYS.IGUANIGNITE,0)
        .setFlipX(true); */
        //create main background 
        this.add.image(0,0, BATTLE_BACKGROUNDS_ASSET_KEYS.FOREST).setOrigin(0);
        
        // render out the player and ennemy monsters
        this.add.image(768, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0);
        this.add.image(256,316, MONSTER_ASSET_KEYS.IGUANIGNITE,0).setFlipX(true);

        // render out the player health bar 
        const playerMonsterName = this.add.text(
            30,
            20,
            MONSTER_ASSET_KEYS.IGUANIGNITE, {
                color: '#7E3D3F0',
                fontSize: '32px'
            }
            );
        this.add.container(556,318, [
            this.add.image(0,0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
            .setOrigin(0),
            playerMonsterName,
            this.#createHealth(34,34),
        ]);
    }
    #createHealth(x, y) {
        const scaleY = 0.7;
        const leftCap = this.add.image(x,y, HEALTH_BAR_ASSET_KEYS.LEFT_CAP).setOrigin(0, 0.5).setScale(1, scaleY);
        const middle = this.add.image(
            leftCap.x + leftCap.width,
             y, 
             HEALTH_BAR_ASSET_KEYS.MIDDLE
             ).setOrigin(0, 0.5)
             .setScale(1, scaleY);
             middle.displayWidth = 260;
        const RightCap = this.add.image(
            middle.x + middle.displayWidth, 
            y, 
            HEALTH_BAR_ASSET_KEYS.RIGHT_CAP).setOrigin(0, 0.5)
            .setScale(1, scaleY);
        return this.add.container(x,y, [leftCap,middle, RightCap]);
    }

    
} 