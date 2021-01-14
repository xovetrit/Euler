import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  otvet = 0;

  code = `
  var count = 0;

    for ( var x = 1; x <= 300000000; x++) {
      for ( var y = 1; y<= 20; y++ ) {
        if ( x % y === 0) {
          count++;
        }
        else {
          count = 0;
        }
        if ( count === 20) {
          console.log(x)
        }
      }
    }

  `

  constructor(){

    var count = 0;

    for ( var x = 2520; x <= 300000000; x++) {
      for ( var y = 1; y<= 20; y++ ) {
        if ( x % y === 0) {
          count++;
        }
        else {
          count = 0;
        }
        if ( count === 20) {
          console.log(x)
          this.otvet = x;
        }
      }
    }
  }

}

