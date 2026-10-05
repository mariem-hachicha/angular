import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirmcomp } from './confirmcomp';

describe('Confirmcomp', () => {
  let component: Confirmcomp;
  let fixture: ComponentFixture<Confirmcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confirmcomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Confirmcomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
