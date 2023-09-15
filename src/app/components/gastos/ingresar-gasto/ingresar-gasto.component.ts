import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;
  
  constructor(private _presupuestoService: PresupuestoService){
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = 'Nombre gasto o cantidad incorrecta';
  }

  ngOnInit(): void {
      
  }

  agregarGasto(){
    if(this.nombreGasto === '' || this.cantidad <= 0){
      this.formularioIncorrecto = true;
    }else{

      //Creamos los objetos

      //Enviamos el objeto a los suscriptores via subjet


      //Reseteamos formulario 


      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }
}
