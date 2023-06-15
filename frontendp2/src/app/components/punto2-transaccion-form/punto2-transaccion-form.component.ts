import { Component } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2-transaccion-form',
  templateUrl: './punto2-transaccion-form.component.html',
  styleUrls: ['./punto2-transaccion-form.component.css']
})
export class Punto2TransaccionFormComponent {
  divisa: Array<Transaccion>;
  filtroTransaccion: Array<Transaccion>;
  monedaOrigen!:string;
  monedaDestino!:string;

  aparecer!:Boolean;

  constructor(private apiService: TransaccionService) {
     this.divisa = new Array<Transaccion>();
     this.filtroTransaccion = new Array<Transaccion>();
     this.obtenerTransacciones();
  }

  obtenerTransacciones(){
    this.aparecer=true;
    this.apiService.getTransacciones().subscribe(
      result => {
        console.log(result)
        let unaTransaccion:Transaccion = new Transaccion(); //
        result.forEach((element: any) => { //element= agarra el elemento 1 ,despues el 2 y asi
          Object.assign(unaTransaccion, element)// agarra target y surs = al destino le asigna la variable fuente- Un producto recibe Elements de la api
          this.divisa.push(unaTransaccion) //
          unaTransaccion = new Transaccion();
        });
      },
      error => {
        alert(error);
      }
    )
  }
  //arreglar filtro

  ObtenerFiltroTransacciones(){
    this.divisa = new Array<Transaccion>();
    this.apiService.getDivisas(this.monedaOrigen,this.monedaDestino).subscribe(
      result => {
         let unaTransaccion = new Transaccion();
         result.forEach((element: any) => {
         Object.assign(unaTransaccion, element);
        this.filtroTransaccion.push(unaTransaccion);
        unaTransaccion = new Transaccion();
        console.log(this.filtroTransaccion);
        });
      },
      error =>{
        alert(error);
      }
    )
  }



}
