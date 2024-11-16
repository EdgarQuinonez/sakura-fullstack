import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBuilderComponent } from './order-builder.component';

describe('OrderBuilderComponent', () => {
  let component: OrderBuilderComponent;
  let fixture: ComponentFixture<OrderBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
