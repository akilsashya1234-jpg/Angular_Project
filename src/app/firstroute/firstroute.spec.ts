import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Firstroute } from './firstroute';

describe('Firstroute', () => {
  let component: Firstroute;
  let fixture: ComponentFixture<Firstroute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Firstroute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Firstroute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
