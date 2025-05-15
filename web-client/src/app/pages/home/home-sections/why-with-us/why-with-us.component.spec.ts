import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWithUsComponent } from './why-with-us.component';

describe('WhyWithUsComponent', () => {
  let component: WhyWithUsComponent;
  let fixture: ComponentFixture<WhyWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyWithUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
