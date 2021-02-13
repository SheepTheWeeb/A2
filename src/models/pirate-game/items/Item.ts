import GameEntity from '../GameEntity';

export default class Item implements GameEntity {
  name: string;
  examineText: string;
  img: File;

  constructor(name: string, examineText: string, img: File) {
    this.name = name;
    this.examineText = examineText;
    this.img = img;
  }
}
