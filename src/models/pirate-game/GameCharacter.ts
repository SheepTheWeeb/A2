import GameEntity from './GameEntity';
import Weapon from './items/Weapon';

export default class GameCharacter implements GameEntity {
  static readonly MAX_DEF = 20;

  name: string;
  examineText: string;
  imgPath: string;
  att: number;
  def: number;
  speed: number;
  maxHp: number;
  hp: number;
  weapon?: Weapon;

  constructor(
    name: string,
    examineText: string,
    imgPath: string,
    att: number,
    def: number,
    speed: number,
    maxHp: number,
    weapon?: Weapon
  ) {
    this.name = name;
    this.examineText = examineText;
    this.imgPath = imgPath;
    this.att = att;
    this.def = def;
    this.speed = speed;
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.weapon = weapon;
  }

  attack(target: GameCharacter): boolean {
    const damageRoll = Math.floor(Math.random() * this.att) + 1;
    const damage = damageRoll + this.att + (this.weapon?.damage || 0);
    const roll = Math.floor(Math.random() * GameCharacter.MAX_DEF);

    if (roll >= target.def) {
      target.hp = target.hp - damage;
      return true;
    }
    return false;
  }
}
