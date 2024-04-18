import Buyable from './Buyable'

export default class Movie implements Buyable {

  constructor(
    readonly id: number,
    readonly imgLink: string,
    readonly name: string,
    readonly nameEng: string,
    readonly cinematicSystem: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string,
    readonly time: number,
    readonly price: number,
  ) {
    this.id = id;
    this.imgLink = imgLink;
    this.name = name;
    this.nameEng = nameEng;
    this.cinematicSystem = cinematicSystem;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.time = time;
    this.price = price;
  }
}