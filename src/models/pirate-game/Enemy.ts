import GameCharacter from './GameCharacter';
import Weapon from './items/Weapon';

export default class Enemy extends GameCharacter {
  deathMessage: string;

  constructor(
    name: string,
    examineText: string,
    imgPath: string,
    att: number,
    def: number,
    speed: number,
    maxHp: number,
    deathMessage: string,
    weapon?: Weapon
  ) {
    super(name, examineText, imgPath, att, def, speed, maxHp, weapon);
    this.deathMessage = deathMessage;
  }
}
