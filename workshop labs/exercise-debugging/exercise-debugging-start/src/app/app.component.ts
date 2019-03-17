import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: string[];

  onAddCar() {
    this.cars.push("Awesome car");
  }

  onRemoveCar(id: number) {
    const position = id + 1;
    this.cars.splice(position, 1);    
  }
}
