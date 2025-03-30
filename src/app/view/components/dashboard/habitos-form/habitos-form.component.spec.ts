import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitosFormComponent } from './habitos-form.component';

describe('HabitosFormComponent', () => {
  let component: HabitosFormComponent;
  let fixture: ComponentFixture<HabitosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitosFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
