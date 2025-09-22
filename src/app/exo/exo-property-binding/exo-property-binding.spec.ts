import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoPropertyBinding } from './exo-property-binding';

describe('ExoPropertyBinding', () => {
  let component: ExoPropertyBinding;
  let fixture: ComponentFixture<ExoPropertyBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoPropertyBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoPropertyBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
