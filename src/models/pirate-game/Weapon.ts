import GameEntity from "./GameEntity";

export default class Weapon implements GameEntity {
  name: string;
  examineText: string;
  img: File;
  damage: number;

  constructor(name: string, examineText: string, img: File, damage: number) {
    this.name = name;
    this.examineText = examineText;
    this.img = img;
    this.damage = damage;
  }
}
