import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BebidasComponent } from './Pags-Sec/bebidas/bebidas.component';
import { CoffeeBreakComponent } from './Pags-Sec/coffee-break/coffee-break.component';
import { LunchComponent } from './Pags-Sec/Lunch/lunch.component';
import { MesaDulceCafeComponent } from './Pags-Sec/mesa-dulce-cafe/mesa-dulce-cafe.component';
import { PernilComponent } from './Pags-Sec/pernil/pernil.component';
import { PizzaPartyComponent } from './Pags-Sec/pizza-party/pizza-party.component';
import { ServiciosComponent } from './Pags-Sec/servicios/servicios.component';
import { SonidoIluminacionComponent } from './Pags-Sec/sonido-iluminacion/sonido-iluminacion.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'PizzaParty',component:PizzaPartyComponent},
  {path:'Lunch', component:LunchComponent},
  {path:'Bebidas', component:BebidasComponent},
  {path:'CoffeeBreak', component:CoffeeBreakComponent},
  {path:'MesaDulceCafe', component:MesaDulceCafeComponent}, 
  {path:'Pernil', component:PernilComponent},
  {path:'Servicios', component:ServiciosComponent},
  {path:'SonidoIluminacion', component:SonidoIluminacionComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
