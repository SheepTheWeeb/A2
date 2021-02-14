import Item from './items/Item';
import Player from './Player';
import Room from './rooms/Room';
import Discord from 'discord.js';
import Enemy from './Enemy';

import enemyInformation from '../../assets/json/pirate-game.enemies.json';
import characterInformation from '../../assets/json/pirate-game.characters.json';
import itemInformation from '../../assets/json/pirate-game.items.json';

export default class GameState {
  private static _instance: GameState;
  private ROOMS_TO_COMPLETE = 3;
  channel: Discord.TextChannel;

  enemyCatelogue: Enemy[];

  crew: Player[];
  items: Item[];

  currentRoom: Room;
  roomChoice: Room[];
  completedRooms: number;

  private static createInstance(): GameState {
    const gameState = new GameState();
    gameState.enemyCatelogue = this.initEnemies(enemyInformation);

    return gameState;
  }

  static getInstance(): GameState {
    if (!this._instance) {
      this._instance = this.createInstance();
    }
    return this._instance;
  }

  static resetGame(): void {
    GameState._instance = null;
  }

  checkIfGameFinished(): boolean {
    return this.completedRooms >= this.ROOMS_TO_COMPLETE;
  }

  static initEnemies(enemiesJson: any): Enemy[] {
    const enemies: Enemy[] = [];
    enemiesJson.forEach((e: any) => {
      enemies.push(
        new Enemy(
          e.name,
          e.examineText,
          e.img,
          e.stats.attack,
          e.stats.defence,
          e.stats.speed,
          e.stats.hitpoints,
          e.deathMessage
        )
      );
    });
    return enemies;
  }
}
