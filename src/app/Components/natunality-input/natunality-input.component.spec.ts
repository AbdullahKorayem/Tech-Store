import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityInputComponent } from './natunality-input.component';

describe('NatunalityInputComponent', () => {
  let component: NationalityInputComponent;
  let fixture: ComponentFixture<NationalityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationalityInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NationalityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
