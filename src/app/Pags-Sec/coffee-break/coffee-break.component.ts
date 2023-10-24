import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-coffee-break',
  templateUrl: './coffee-break.component.html',
  styleUrls: ['./coffee-break.component.css']
})
export class CoffeeBreakComponent {
  constructor(private titleService: Title){
    titleService.setTitle('Alioli | Coffee Break')
   }
}
