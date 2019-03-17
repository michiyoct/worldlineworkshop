import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../model/stock';
import { Observable } from 'rxjs';

import { share } from 'rxjs/operators';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})

export class StockListComponent implements OnInit {

  public stocks$: Observable<Stock[]>;
  public searchString: string = '';

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stocks$ = this.stockService.getStocks(this.searchString).pipe(share());
  }

  search() {
    this.stocks$ = this.stockService.getStocks(this.searchString).pipe(share());
  }

}
