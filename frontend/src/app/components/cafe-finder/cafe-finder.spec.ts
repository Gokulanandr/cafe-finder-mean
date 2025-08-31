import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeFinder } from './cafe-finder';

describe('CafeFinder', () => {
  let component: CafeFinder;
  let fixture: ComponentFixture<CafeFinder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeFinder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeFinder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
