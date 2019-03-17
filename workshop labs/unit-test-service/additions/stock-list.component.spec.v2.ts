import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StockListComponent } from './stock-list.component';
import { StockService } from '../../services/stock.service';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { Stock } from '../../model/stock';

describe('StockListComponent With Mock Service', () => {

    let component: StockListComponent;
    let fixture: ComponentFixture<StockListComponent>;
    let stockService: StockService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StockListComponent, StockItemComponent],
            providers: [StockService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StockListComponent);
        component = fixture.componentInstance;
        // Always get the Service from the Injector!
        stockService = fixture.debugElement.injector.get(StockService);
        const spy = spyOn(stockService, 'getStocks').and.returnValue([
            new Stock('Mock Stock', 'MS', 800, 900, 'NYSE')
        ]);
        fixture.detectChanges();
    });

    it('should load stocks from mocked service on init', () => {
        expect(component).toBeTruthy();
        expect(component.stocks.length).toEqual(1);
        expect(component.stocks[0].code).toEqual('MS');
    });
});



