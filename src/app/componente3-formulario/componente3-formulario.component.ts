import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3-formulario',
  templateUrl: './componente3-formulario.component.html',
  styleUrls: ['./componente3-formulario.component.css']
})
export class Componente3FormularioComponent {
  correo: string =""
  direccion: string =""
  ciudad: string =""
  terminos: boolean = false
  formapago: string =""
  telefono: string=""
  mensaje: string=""
  
  constructor(){ }
  ngOnInit(): void {
 
  }

  pulsar(){
    this.mensaje=this.correo+(", ")+this.direccion+(", ")+this.telefono+(", ")+this.ciudad+(", ")+this.formapago+(", ")+this.terminos;
  }

}
