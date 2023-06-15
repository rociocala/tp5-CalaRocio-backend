import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
   private apiUrl="http://localhost:3000/api/ticket/";

  constructor(private _http: HttpClient) { }

  getTickets():Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()

    }

    return this._http.get(this.apiUrl,httpOptions);
  }

  createTicket(ticket:Ticket):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()
    }

    let body = JSON.stringify(ticket);

    return this._http.post(this.apiUrl,body,httpOptions);
  }

  getEspectadorTicket(categoria:string):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()

    }

    return this._http.get(this.apiUrl+categoria,httpOptions);
  }

  editTicket(ticket:Ticket):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()
    }

    let body = JSON.stringify(ticket);

    return this._http.put(this.apiUrl+ticket._id,body,httpOptions);
  }

  deleteTicket(id:string):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }

    return this._http.delete(this.apiUrl+id,httpOptions);
  }


}
