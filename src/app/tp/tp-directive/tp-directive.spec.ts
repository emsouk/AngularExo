import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpDirective } from './tp-directive';

describe('TpDirective', () => {
  let component: TpDirective;
  let fixture: ComponentFixture<TpDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
