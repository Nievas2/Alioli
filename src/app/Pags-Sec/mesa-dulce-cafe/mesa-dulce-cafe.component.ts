import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-mesa-dulce-cafe',
  templateUrl: './mesa-dulce-cafe.component.html',
  styleUrls: ['./mesa-dulce-cafe.component.css']
})
export class MesaDulceCafeComponent {
  constructor(private titleService: Title){
    titleService.setTitle('Alioli | Mesa Dulce y Café')
   }
}
