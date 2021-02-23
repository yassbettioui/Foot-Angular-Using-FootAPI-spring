import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStadeComponent } from './detail-stade.component';

describe('DetailStadeComponent', () => {
  let component: DetailStadeComponent;
  let fixture: ComponentFixture<DetailStadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
