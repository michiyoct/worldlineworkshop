import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateStockComponent } from './create-stock.component';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../model/stock';

import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CreateStockComponent', () => {

    let component: CreateStockComponent;
    let fixture: ComponentFixture<CreateStockComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateStockComponent],
            providers: [StockService],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateStockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create stock through service', fakeAsync(() => {
        expect(component).toBeTruthy();
        component.stock = new Stock(
            'My New Test Stock', 'MNTS', 100, 120, 'NYSE');
        component.createStock({ valid: true });
        tick();
        fixture.detectChanges();
        expect(component.message)
            .toEqual('Stock with code MNTS successfully created');
    }));
});
