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
  selectedCar: Car;

  constructor(private carService: CarService) {
    this.selectedCar = new Car();
  }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }
  editCar(carId: number) {

    // This way we do not talk to DB
    this.selectedCar = this.cars.find( 
      (e: Car) => e.id === carId
    );

    //This way we can have some delay since it talks to DB
/*     this.carService.getCarById(carId)
    .subscribe(
      (car: Car) =>  {
        this.selectedCar = car;
      },
      error => {
        alert('Could not retrieve car with id ' + carId);
      }
    ); */

    //Passing the info of car to form
    

  }

  deleteCar(carId: number) {
    this.carService.deleteCar(carId).subscribe((car: Car) => {
      this.getCars();
    });
  }
}
