import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHabitoComponent } from './listar-habito.component';

describe('ListarHabitoComponent', () => {
  let component: ListarHabitoComponent;
  let fixture: ComponentFixture<ListarHabitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarHabitoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarHabitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
