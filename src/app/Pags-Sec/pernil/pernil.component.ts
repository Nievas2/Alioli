import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-pernil',
  templateUrl: './pernil.component.html',
  styleUrls: ['./pernil.component.css']
})
export class PernilComponent {
  constructor(private titleService: Title){
    titleService.setTitle('Alioli | Pernil')
   }
}
