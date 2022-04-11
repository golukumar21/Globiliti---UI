import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactBoardComponent } from './impact-board.component';

describe('ImpactBoardComponent', () => {
  let component: ImpactBoardComponent;
  let fixture: ComponentFixture<ImpactBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
