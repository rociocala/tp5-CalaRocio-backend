import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto3-ticket',
  templateUrl: './punto3-ticket.component.html',
  styleUrls: ['./punto3-ticket.component.css']
})
export class Punto3TicketComponent {

  tickets!: Array<Ticket>;
  ticket!: Ticket;
  categoria!:Array<Ticket>;

  categoriaEspectador:string="";

  constructor(private apiService: TicketService, private router: Router) {
    this.categoriaEspectador ="";
    this.tickets = new Array<Ticket>();
    this.obtenerTickets();
    this.ticket = new Ticket();
    this.categoria= new Array<Ticket>();
  }


  obtenerTickets() {
    this.apiService.getTickets().subscribe(
      result => {
        console.log(result);
        let unTicket: Ticket = new Ticket();
        result.forEach((element: any) => { //element= agarra el elemento 1 ,despues el 2 y asi
          Object.assign(unTicket, element)
          this.tickets.push(unTicket)
          unTicket = new Ticket();
        });
      },
      error => {

      }
    )
  }

  borrarTicket(ticket: Ticket) {
    this.apiService.deleteTicket(ticket._id).subscribe(
      result => {
        if (result.status == 1) {
          console.log(result);

        // eliminar ticket de la lista
        const index = this.tickets.indexOf(ticket);
        if (index !== -1) {
          this.tickets.splice(index, 1);
        }
        }
      },
      error => {

      }
    )
  }

  tipoDeEspectador(){
    this.tickets = new Array<Ticket>();

    this.apiService.getEspectadorTicket(this.categoriaEspectador).subscribe(
      result=>{
         let unaCategoria = new Ticket();
        result.forEach((element: any) => {
         Object.assign(unaCategoria, element);
        this.tickets.push(unaCategoria);
        unaCategoria = new Ticket();
        });
        console.log(result);
      },
      error=>{
        console.log(error);
      }
    )
  }


  agregarTicket() {
    this.router.navigate(["punto3-ticket-form", 0])
  }

  modificarTicket(ticket: Ticket) {
    this.router.navigate(["punto3-ticket-form", ticket._id])
  }

}
