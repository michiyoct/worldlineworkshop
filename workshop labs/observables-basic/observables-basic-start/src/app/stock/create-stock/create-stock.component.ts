import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed = false;
  public message = null;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private stockService: StockService) {
    this.stock =  new Stock('', '', 0, 0, 'NASDAQ');
  }

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm) {
    if (stockForm.valid) {
      const created = this.stockService.createStock(this.stock);
      if (created) {
        this.message = 'Successfully created stock with stock code: ' + this.stock.code;
        this.stock =  new Stock('', '', 0, 0, 'NASDAQ');
      } else {
        this.message = 'Stock with stock code: ' + this.stock.code + ' already exists';
      }
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
