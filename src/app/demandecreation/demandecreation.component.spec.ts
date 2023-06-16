import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandecreationComponent } from './demandecreation.component';

describe('DemandecreationComponent', () => {
  let component: DemandecreationComponent;
  let fixture: ComponentFixture<DemandecreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandecreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
