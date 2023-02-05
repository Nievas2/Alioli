import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CateringComponent } from './components/catering/catering.component';
import { LoQueNecesitasComponent } from './components/lo-que-necesitas/lo-que-necesitas.component';
import { NosEncargamosComponent } from './components/nos-encargamos/nos-encargamos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EncontrarnosComponent } from './components/encontrarnos/encontrarnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { PizzaPartyComponent } from './Pags-Sec/pizza-party/pizza-party.component';
import { LunchComponent } from './Pags-Sec/Lunch/lunch.component';
import { PernilComponent } from './Pags-Sec/pernil/pernil.component';
import { MesaDulceCafeComponent } from './Pags-Sec/mesa-dulce-cafe/mesa-dulce-cafe.component';
import { BebidasComponent } from './Pags-Sec/bebidas/bebidas.component';
import { ServiciosComponent } from './Pags-Sec/servicios/servicios.component';
import { CoffeeBreakComponent } from './Pags-Sec/coffee-break/coffee-break.component';
import { SonidoIluminacionComponent } from './Pags-Sec/sonido-iluminacion/sonido-iluminacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CateringComponent,
    LoQueNecesitasComponent,
    NosEncargamosComponent,
    SobreNosotrosComponent,
    ProductosComponent,
    FormularioComponent,
    EncontrarnosComponent,
    PizzaPartyComponent,
    LunchComponent,
    PernilComponent,
    MesaDulceCafeComponent,
    BebidasComponent,
    ServiciosComponent,
    CoffeeBreakComponent,
    SonidoIluminacionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
