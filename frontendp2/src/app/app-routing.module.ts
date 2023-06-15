import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Punto1ProductoFormComponent } from './components/punto1-producto-form/punto1-producto-form.component';
import { Punto1ProductoComponent } from './components/punto1-producto/punto1-producto.component';
import { Punto2TransaccionComponent } from './components/punto2-transaccion/punto2-transaccion.component';
import { Punto2TransaccionFormComponent } from './components/punto2-transaccion-form/punto2-transaccion-form.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'punto1-producto', component: Punto1ProductoComponent },
  { path: 'punto1-producto-form/:id', component: Punto1ProductoFormComponent},
  { path: 'punto2-transaccion', component: Punto2TransaccionComponent },
  { path: 'punto2-transaccion-form/:id', component: Punto2TransaccionFormComponent},
  {path:'', redirectTo:'/punto1-producto', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
