import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingWidgetComponent } from './saving-widget.component';

describe('SavingWidgetComponent', () => {
  let component: SavingWidgetComponent;
  let fixture: ComponentFixture<SavingWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
