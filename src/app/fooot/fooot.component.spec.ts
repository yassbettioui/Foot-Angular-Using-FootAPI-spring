import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoootComponent } from './fooot.component';

describe('FoootComponent', () => {
  let component: FoootComponent;
  let fixture: ComponentFixture<FoootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
