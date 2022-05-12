import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductpriceComponent } from './productprice.component';

describe('ProductpriceComponent', () => {
  let component: ProductpriceComponent;
  let fixture: ComponentFixture<ProductpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductpriceComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default quantity be 1', () => {
    expect(component.qty).toBe(1);
  });

  it('Default Result message should be empty', () => {
    const strOutput: string = component.result;
    expect(strOutput).toBe("");
  });

  it('Should result contains "Total amount of Printer is 5000 Rs"', () => {
    component.pname = "Printer";
    component.uprice = 500;
    component.qty = 10;
    component.get_total();
    const strOutput: string = component.result;
    expect(strOutput).toBe("Total amount of Printer is 5000 Rs");
  });

  it('Should result contains "Total amount of Printer is NaN Rs"', () => {
    component.pname = "Printer";
    component.uprice = "abc";
    component.qty = 10;
    component.get_total();
    const strOutput: string = component.result;
    expect(strOutput).toBe("Total amount of Printer is NaN Rs");
  });

  it('should set the value of price to be 5000', () => {
    let inputObj = fixture.nativeElement.querySelectorAll("input");

    inputObj[1].value = 5000;
    inputObj[1].dispatchEvent(new Event('input'));
    expect(component.uprice).toBe('5000');
  });

  it('should have updated the price property value to be 1000"', () => {
    component.uprice = '1000';
    expect(component.uprice).toBe('1000');
  });

  it('Should result contains "Total amount of Laptop is 500000 Rs" after click event', () => {
    let inputObj = fixture.nativeElement.querySelectorAll("input");
    inputObj[0].value = "Laptop"
    inputObj[0].dispatchEvent(new Event('input'));
    inputObj[1].value = 50000;
    inputObj[1].dispatchEvent(new Event('input'));
    inputObj[2].value = 10;
    inputObj[2].dispatchEvent(new Event('input'));

    let inputEvent = fixture.nativeElement.querySelector('button');
    inputEvent.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    let parObj = fixture.nativeElement.querySelector('p');
    expect(parObj.textContent).toBe('Total amount of Laptop is 500000 Rs');
  });

});
