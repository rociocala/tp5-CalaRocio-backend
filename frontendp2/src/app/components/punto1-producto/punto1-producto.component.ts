import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-punto1-producto',
  templateUrl: './punto1-producto.component.html',
  styleUrls: ['./punto1-producto.component.css']
})
export class Punto1ProductoComponent {
  produ:Array<Producto>;
  productosDestacados:Array<Producto>;
  constructor(private api:ProductoService, private router: Router){
    this.produ= new Array<Producto>();
    this.productosDestacados= new Array<Producto>();
    this.obtenerProductos()
    this.obtenerProductosDestacados()
  }

   //buscar todos los productos
  obtenerProductos(){
    this.api.getProductos().subscribe(
      result=>{
        console.log(result)
        let unProducto:Producto = new Producto(); //
        result.forEach((element:any) => { //element= agarra el elemento 1 ,despues el 2 y asi
          Object.assign(unProducto,element)// agarra target y surs = al destino le asigna la variable fuente- Un producto recibe Elements de la api
          this.produ.push(unProducto) //
          unProducto = new Producto();
        });
      },
      error=>{
        alert(error);
      }

    )
  }

  obtenerProductosDestacados(){
    this.api.getProductosDestacados().subscribe(
      result=>{
        console.log(result)
        let unProducto:Producto = new Producto();
        result.forEach((element:any) => {
          Object.assign(unProducto,element)
          this.productosDestacados.push(unProducto)
          unProducto = new Producto();
        });
      },
      error=>{
        alert(error);
      }
    )
  }

  // redireccion al form para dar de alta
  agregarProductos(){
    this.router.navigate(["punto1-producto-form",0])
  }

  modificarProductos(producto:Producto){
    this.router.navigate(["punto1-producto-form",producto._id])
  }
}
