import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  private apiUrl = 'https://currency-converter18.p.rapidapi.com/api/v1/convert';
  private apiUrl2= 'https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies';

  constructor(private _http: HttpClient) { }

  getConvertir(cantidad:number ,actual:string, posterior:string ):Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {
          'Content-Type':'application/json',
          'X-RapidAPI-Key': '89ac08a567msh7151e79552e38a2p19a721jsnc0597a729fc5'

        }
      ),
      params: new HttpParams()
      .append('from',actual)
      .append('to',posterior)
      .append('amount',cantidad)
    }

    return this._http.get(this.apiUrl,httpOption)
  }

  getConvertir2():Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {
          'Content-Type':'application/json',
          'X-RapidAPI-Key': '89ac08a567msh7151e79552e38a2p19a721jsnc0597a729fc5'

        }
      )
    }

    return this._http.get(this.apiUrl2,httpOption)
  }

  //--------------------------------------------------------------------

  private url="http://localhost:3000/api/transaccion/"

  // alta de una transaccion
  createTransaccion(transaccion: Transaccion):Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {
          'Content-Type':'application/json',
        }
      ),
      params: new HttpParams()

    }
    let body = JSON.stringify(transaccion);
    return this._http.post(this.url,body,httpOption)
  }

  // recuperar TODAS las Transacciones Registradas

  getTransacciones():Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()

    }
    return this._http.get(this.url,httpOption)
  }

  // recupera todas las transacciones , moneda y origen
  getDivisas(monedaOrigen:string,monedaDestino:string):Observable<any>{
    let httpOption={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
      .append('origen',monedaOrigen)
      .append('destino',monedaDestino)
    }

    return this._http.get(this.url+'moneda',httpOption)
  }
}
