import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1-calculadora',
  templateUrl: './componente1-calculadora.component.html',
  styleUrls: ['./componente1-calculadora.component.css']
})
export class Componente1CalculadoraComponent {
  num1: number = 0
  num2: number = 0
  total: number = 0

  constructor(){}

  ngOnInit():void{
  }

  mostrarsuma(){
    this.total = (this.num1 + this.num2)
    alert("El valor es " + this.total)
  }
  mostrarresta(){
    this.total = (this.num1 - this.num2)
    alert("El valor es " + this.total)
  }
  mostrardivision(){
    this.total = (this.num1 * this.num2)
    alert("El valor es " + this.total)
  }
  mostrarmultiplicacion(){
    this.total = (this.num1 / this.num2)
    alert("El valor es " + this.total)
  }
}
