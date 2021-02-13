import SpellHandler from '../../controllers/pirate-game/SpellHandler';
import Enemy from './Enemy';
import GameCharacter from './GameCharacter';
import Weapon from './items/Weapon';

export default class Player extends GameCharacter {
  magic: number;

  constructor(
    name: string,
    examineText: string,
    img: File,
    att: number,
    def: number,
    magic: number,
    speed: number,
    maxHp: number,
    weapon?: Weapon
  ) {
    super(name, examineText, img, att, def, speed, maxHp, weapon);
    this.magic = magic;
  }

  cast(target: Enemy): void {
    SpellHandler.handle(this, target);
  }

  polymorph(): void {
    // TODO: transforms the target into a sheep, message: oh no!, anyway meme
  }

  examine(): void {
    // TODO: implement this
  }
}
