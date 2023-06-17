import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto3-ticket-form',
  templateUrl: './punto3-ticket-form.component.html',
  styleUrls: ['./punto3-ticket-form.component.css']
})
export class Punto3TicketFormComponent implements OnInit{
  espectador!:Array<Espectador>;
  ticket!:Ticket;
  accion:string="";

  constructor(private apiService:TicketService, private activateRoute:ActivatedRoute,private espectadorService:EspectadorService,private router:Router){
    this.ticket= new Ticket();
    this.espectador = new Array<Espectador>();
        const fecha = new Date();
        this.ticket.fechaCompra = fecha.toLocaleDateString();
  }

  ngOnInit():void{
    this.activateRoute.params.subscribe(
      params =>{
        if(params['id'] == 0){
          this.accion = "new";
          this.cargarEspectadores();
        }else{
          this.accion = "update";
          this.cargarEspectadores();
          this.cargarTicket(params['id']);
        }
      }
    )
  }

  cargarTicket(id:string){
    this.apiService.getTicket(id).subscribe(
      result=>{
        console.log(result);
        Object.assign(this.ticket,result);
        //al modificar muestra el espectador correspondiente en la vista
        this.ticket.espectador = this.espectador.find(item => (item._id == this.ticket.espectador._id))!
      },
      error=>{

      }
    )
  }

  cargarEspectadores(){
    this.espectadorService.getEspectadores().subscribe(
      result=>{
        console.log(result);
        let unEspectador:Espectador = new Espectador();
        result.forEach((element:any) => {
          Object.assign(unEspectador,element)
          this.espectador.push(unEspectador)
          unEspectador = new Espectador();
      });
    },
      error=>{

      }
    )
  }

  guardarTicket(){
    this.apiService.createTicket(this.ticket).subscribe(
      result=>{
        if(result.status == 1){
         // alert(result.msg);
        }
      },
      error=>{
        alert(error.msg);
      }
    )
    this.router.navigate(["punto3-ticket"])
  }

  modificarTicket(){
    console.log(this.ticket);

     this.apiService.editTicket(this.ticket).subscribe(
      result=>{
        if(result.status == 1){
          alert(result.msg);
        }
        this.router.navigate(["punto3-ticket"])
      },
      error=>{
        alert(error.msg);
      }
    )
  }


}
