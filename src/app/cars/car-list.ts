import { Car } from "../models/car";
import { Engine } from '../models/engine';

const cars: Car[] =  [
 {
     brand: "Renault",
     model: "Clio",
     engine: {
         consumption: 2.2,
         fuel: "petrol",
         power: 130
     } as Engine,
     km: 100000,
     price: 7000,
     year: 2012
 },
 {
    brand: "Peugeot",
    model: "207",
    engine: {
        consumption: 1.6,
        fuel: "petrol",
        power: 120
    } as Engine,
    km: 120000,
    price: 5000,
    year: 2010
},
{
    brand: "VW",
    model: "Polo",
    engine: {
        consumption: 1.6,
        fuel: "petrol",
        power: 120
    } as Engine,
    km: 105000,
    price: 6000,
    year: 2012
}  
];

export default cars;