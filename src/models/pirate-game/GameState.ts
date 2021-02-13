import Item from './items/Item';
import Player from './Player';
import Room from './rooms/Room';
import Discord from 'discord.js';

export default class GameState {
  private static _instance: GameState;
  private ROOMS_TO_COMPLETE = 3;
  channel: Discord.TextChannel;

  crew: Player[];
  items: Item[];

  currentRoom: Room;
  roomChoice: Room[];
  completedRooms: number;

  private static createInstance(): GameState {
    return new GameState();
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
}
