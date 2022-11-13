import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingSvgComponent } from './saving-svg.component';

describe('SavingSvgComponent', () => {
  let component: SavingSvgComponent;
  let fixture: ComponentFixture<SavingSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
