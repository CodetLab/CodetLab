import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinguishesUsComponent } from './distinguishes-us.component';

describe('DistinguishesUsComponent', () => {
  let component: DistinguishesUsComponent;
  let fixture: ComponentFixture<DistinguishesUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistinguishesUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinguishesUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
