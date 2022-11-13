import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutWidgetComponent } from './in-out-widget.component';

describe('InOutWidgetComponent', () => {
  let component: InOutWidgetComponent;
  let fixture: ComponentFixture<InOutWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOutWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
