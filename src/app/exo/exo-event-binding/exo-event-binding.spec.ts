import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoEventBinding } from './exo-event-binding';

describe('ExoEventBinding', () => {
  let component: ExoEventBinding;
  let fixture: ComponentFixture<ExoEventBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoEventBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoEventBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
