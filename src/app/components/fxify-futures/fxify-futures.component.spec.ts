import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxifyFuturesComponent } from './fxify-futures.component';

describe('FxifyFuturesComponent', () => {
  let component: FxifyFuturesComponent;
  let fixture: ComponentFixture<FxifyFuturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FxifyFuturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FxifyFuturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
