import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-sonido-iluminacion',
  templateUrl: './sonido-iluminacion.component.html',
  styleUrls: ['./sonido-iluminacion.component.css']
})
export class SonidoIluminacionComponent {
  constructor(private titleService: Title){
    titleService.setTitle('Alioli | Sonido')
   }
}
