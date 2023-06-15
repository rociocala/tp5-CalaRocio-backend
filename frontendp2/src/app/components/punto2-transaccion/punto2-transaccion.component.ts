import { Transaccion } from './../../models/transaccion';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2-transaccion',
  templateUrl: './punto2-transaccion.component.html',
  styleUrls: ['./punto2-transaccion.component.css']
})
export class Punto2TransaccionComponent {
  transaccion:Transaccion;
  resultado2:Array<any>;
  tasaConversiones:string="";

  aparecer: boolean=false;

  constructor(private apiService : TransaccionService, private router: Router) {
    this.transaccion = new Transaccion;
    this.resultado2 = new Array<any>();
    this.mostrarDivisas2();
  }

  mostrarTasaConversion(){
    this.apiService.getConvertir(this.transaccion.cantidadOrigen,this.transaccion.monedaOrigen,this.transaccion.monedaDestino).subscribe(
      (result)=>{
        this.transaccion.cantidadDestino=result.result.convertedAmount;
        console.log(this.transaccion.cantidadDestino);
      },
      error => {
        alert("Error");
      }
    )

    this.apiService.getConvertir(this.transaccion.cantidadOrigen,this.transaccion.monedaOrigen,this.transaccion.monedaDestino).subscribe(
      (result)=>{
        this.transaccion.tasaConversion=result.result.convertedAmount;;
        this.tasaConversiones =  this.transaccion.cantidadOrigen +" "+ this.transaccion.monedaOrigen + " equivale a "+ this.transaccion.tasaConversion + " "+ this.transaccion.monedaDestino;
        console.log(this.transaccion.cantidadDestino);
      },
      error => {
        alert("Error");
      }
    )
    this.aparecer = true;
  }



  /*this.transaccionService.convertirApi2(1, this.transaccion.monedaOrigen, this.transaccion.monedaDestino).subscribe(
    (result) => {
      //console.log(result);
      this.transaccion.tasaConversion = result.result.convertedAmount;
      this.tasaConversion = '1 ' + this.transaccion.monedaOrigen + " equivale a "+ this.transaccion.tasaConversion + " "+ this.transaccion.monedaDestino;
    },
    (error) => console.log("error")
  )
  mostrarTasaConversion(){
    this.apiService.getConvertir(this.transaccion.cantidadOrigen,this.transaccion.monedaOrigen,this.transaccion.monedaDestino).subscribe(
      (result)=>{
        this.transaccion.tasaConversion=result.result.convertedAmount;;
        this.tasaConversiones =  this.transaccion.cantidadOrigen + this.transaccion.monedaOrigen + " equivale a "+ this.transaccion.tasaConversion + " "+ this.transaccion.monedaDestino;
        console.log(this.transaccion.cantidadDestino);
      },
      error => {
        alert("Error");
      }
    )
  }*/
  //----------------------------------------------

  mostrarDivisas2(){
    this.apiService.getConvertir2().subscribe(
      (result)=>{ // devuelve un arreglo
        this.resultado2=result;
        console.log(this.resultado2);
      },
      error => {
        alert("Error");
      }
    )
  }
  /*MostrarDivisas(){
    this.transaccionService.getCovertir(this.moneda,this.actual,this.posterior).subscribe(respuesta=>{
      this.resultado=respuesta.result;
      console.log(this.resultado)
    })
  }*/
  /*MostrarDivisas2(){
    this.transaccionService.getConvertir2().subscribe(respuesta=>{
      this.resultado2=respuesta;
      console.log(this.resultado2)
    })
  }*/

   //------------------------------------

   //guarda la transaccion - alta
   guardarConversion(){
    this.apiService.createTransaccion(this.transaccion).subscribe(
      result=>{
        if(result.status == 1){
          alert(result.msg);
          this.router.navigate(["punto2-transaccion-form",0])
        }
      },
      error=>{
        alert(error.msg);
      }
    )

  }

}
