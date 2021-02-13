import GameCharacter from './GameCharacter';
import Weapon from './items/Weapon';

export default class Enemy extends GameCharacter {
  deathMessage: string;

  constructor(
    name: string,
    examineText: string,
    img: File,
    att: number,
    def: number,
    speed: number,
    maxHp: number,
    deathMessage: string,
    weapon?: Weapon
  ) {
    super(name, examineText, img, att, def, speed, maxHp, weapon);
    this.deathMessage = deathMessage;
  }
}
