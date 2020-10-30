import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  sum = 0;

  constructor() {

    for (let i = 0; i < 1000; i++) 
      if (i % 3 == 0 || i % 5 == 0)  this.sum += i;
    
  }
}
