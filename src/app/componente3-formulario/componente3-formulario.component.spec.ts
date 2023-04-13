import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente3FormularioComponent } from './componente3-formulario.component';

describe('Componente3FormularioComponent', () => {
  let component: Componente3FormularioComponent;
  let fixture: ComponentFixture<Componente3FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente3FormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente3FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
