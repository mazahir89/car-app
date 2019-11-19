import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit {
  // @ts-ignore
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  debug(form): void {
    console.log(form);
  }
  processForm(car: Car): void {
    //add a new car
    this.carService.addCar(car).subscribe((car: Car) => {
      this.update.emit(true);
    },
    error => {
      alert('Could not retrieve cars!');
    }
    );
  }
}
