import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Componente1CalculadoraComponent } from './componente1-calculadora/componente1-calculadora.component';
import { FormsModule } from '@angular/forms';
import { Componente2CalculardivisasComponent } from './componente2-calculardivisas/componente2-calculardivisas.component';
import { Componente3FormularioComponent } from './componente3-formulario/componente3-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1CalculadoraComponent,
    Componente2CalculardivisasComponent,
    Componente3FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
