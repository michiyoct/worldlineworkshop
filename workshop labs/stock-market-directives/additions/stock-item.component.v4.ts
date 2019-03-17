import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})

export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;
  public actions: string[] = ['Buy now !','Hold on','Sell now !'];

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock('KLSE TM Stock Company', 'TSC', 85, 80),
      new Stock('NYSE Google Stock Company', 'GSC', 10, 20),
      new Stock('KLSE MAS Stock Company', 'MSC', 876, 765),
      new Stock('KLSE Tenaga Stock Company', 'TSC', 115, 100),
      new Stock('NYSE Facebook Stock Company', 'FSC', 75, 90),
      new Stock('NYSE Instagram Stock Company', 'ISC', 230, 300)
      
    ];
  }


  toggleFavorite(event: MouseEvent, index: number) {
    console.log('We are toggling the favorite state for stock', index,
      event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  trackStockByCode(index: number, stock: Stock) {
    return stock.code;
  }

}
