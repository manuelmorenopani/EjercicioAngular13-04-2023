import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1CalculadoraComponent } from './componente1-calculadora.component';

describe('Componente1CalculadoraComponent', () => {
  let component: Componente1CalculadoraComponent;
  let fixture: ComponentFixture<Componente1CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1CalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
