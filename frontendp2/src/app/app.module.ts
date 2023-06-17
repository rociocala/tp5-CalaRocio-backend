import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Punto1ProductoComponent } from './components/punto1-producto/punto1-producto.component';
import { Punto1ProductoFormComponent } from './components/punto1-producto-form/punto1-producto-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Punto2TransaccionComponent } from './components/punto2-transaccion/punto2-transaccion.component';
import { Punto2TransaccionFormComponent } from './components/punto2-transaccion-form/punto2-transaccion-form.component';
import { Punto3TicketComponent } from './components/punto3-ticket/punto3-ticket.component';
import { Punto3TicketFormComponent } from './components/punto3-ticket-form/punto3-ticket-form.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Punto1ProductoComponent,
    Punto1ProductoFormComponent,
    FooterComponent,
    Punto2TransaccionComponent,
    Punto2TransaccionFormComponent,
    Punto3TicketComponent,
    Punto3TicketFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CurrencyPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
