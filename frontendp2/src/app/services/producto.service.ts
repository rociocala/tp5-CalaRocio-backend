import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
   private apiUrl = "http://localhost:3000/api/producto/";
  constructor(private api:HttpClient) { }


  getProductos(): Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }

    return this.api.get(this.apiUrl,httpOption)
  }

  getProducto(id:string): Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }

    return this.api.get(this.apiUrl+id,httpOption)
  }

  getProductosDestacados(): Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }

    return this.api.get(this.apiUrl+"destacado",httpOption)
  }


  createProducto(producto: Producto): Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {
          'Content-Type':'application/json',
        }
      ),
      params: new HttpParams()
    }
    let body = JSON.stringify(producto);
    return this.api.post(this.apiUrl,body,httpOption)
  }


}
