import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StockListComponent } from './stock-list.component';
import { StockService } from '../../services/stock.service';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { Stock } from '../../model/stock';

describe('StockListComponent With Real Service', () => {
    let component: StockListComponent;
    let fixture: ComponentFixture<StockListComponent>;

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
        fixture.detectChanges();
    });

    it('should load stocks from real service on init', () => {
        expect(component).toBeTruthy();
        expect(component.stocks.length).toEqual(3);
    });
});
