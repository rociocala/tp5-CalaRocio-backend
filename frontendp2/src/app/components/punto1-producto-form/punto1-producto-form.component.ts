import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-punto1-producto-form',
  templateUrl: './punto1-producto-form.component.html',
  styleUrls: ['./punto1-producto-form.component.css']
})
export class Punto1ProductoFormComponent implements OnInit{
   producto = new Producto();
   accion:string="";
   constructor(private api:ProductoService,private router: Router,private activateRoute: ActivatedRoute){}

   ngOnInit():void{
    this.activateRoute.params.subscribe(
      params =>{
        if(params['id'] == 0){
          this.accion = "new";
        }else{
          this.accion = "update";
          this.cargarProducto(params['id']);
        }
      }
    )
  }
  cargarProducto(id:string){
    this.api.getProducto(id).subscribe(
      result=>{
        Object.assign(this.producto,result);
      },
      error=>{

      }
    )
  }

  guardarProducto(){
    this.api.createProducto(this.producto).subscribe(
      result=>{
        if(result.status == 1){
          alert(result.msg);
        }
      },
      error=>{
        alert(error.msg);
      }
    )

    this.router.navigate(["punto1-producto"])
  }

  actualizarProducto(){
    this.router.navigate(["punto1-producto"])
  }
}
