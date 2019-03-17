import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})

export class StockItemComponent implements OnInit {

  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean;

  constructor() { }

  ngOnInit() {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }

  toggleFavorite(event: MouseEvent) {
    console.log("The mouse button that was clicked was " + event.which);
    console.log("Mouse was clicked at x-coordinate : " + event.clientX);
    console.log("Mouse was clicked at y-coordinate : " + event.clientY);
    console.log("Button text is : " + event.srcElement.firstChild.nodeValue);
    console.log("The event is : ", event);
    this.favorite = !this.favorite;
  }

}
