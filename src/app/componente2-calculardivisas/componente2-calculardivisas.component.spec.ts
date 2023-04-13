import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2CalculardivisasComponent } from './componente2-calculardivisas.component';

describe('Componente2CalculardivisasComponent', () => {
  let component: Componente2CalculardivisasComponent;
  let fixture: ComponentFixture<Componente2CalculardivisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2CalculardivisasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2CalculardivisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
