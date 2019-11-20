import { Engine } from './engine';

export class Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  km: number;
  engine: Engine;

  Car() {
    this.id = null;
    this.brand = null;
    this.model = null;
    this.year = null;
    this.price= null;
    this.km = null; 
    this.engine = new Engine();

  }
}
