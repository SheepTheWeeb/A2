import Item from './Item';

export default class Weapon extends Item {
  damage: number;

  constructor(name: string, examineText: string, img: File, damage: number) {
    super(name, examineText, img);
    this.damage = damage;
  }
}
