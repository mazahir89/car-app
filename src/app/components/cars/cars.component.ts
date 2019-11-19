import { Component, OnInit } from "@angular/core";
import { Car } from "../../models/car";
import { CarService } from "../../../app/services/car.service";

@Component({
  selector: "app-cars",
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.css"]
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) {}

  ngOnInit() {
  
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }
}
