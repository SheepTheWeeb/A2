import GameEntity from '../GameEntity';

export default class Item implements GameEntity {
  name: string;
  examineText: string;
  imgPath: string;

  constructor(name: string, examineText: string, imgPath: string) {
    this.name = name;
    this.examineText = examineText;
    this.imgPath = imgPath;
  }
}
