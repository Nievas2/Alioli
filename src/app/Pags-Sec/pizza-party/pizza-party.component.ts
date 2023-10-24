import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-pizza-party',
  templateUrl: './pizza-party.component.html',
  styleUrls: ['./pizza-party.component.css']
})
export class PizzaPartyComponent {
  constructor(private titleService: Title){
    titleService.setTitle('Alioli | Pizza')
   }
}
