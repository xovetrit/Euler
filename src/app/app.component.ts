import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  otvet = [];
  otvet2 = 0;
  otvet3 = 0;

  code = `
  for ( var a = 1; a < 1000; a++ ) {
    for ( var b = a + 1; b < 1000; b++ ) {
      var cbefore = Math.sqrt(a ** 2 + b ** 2)
      var c = 0;
      if ( cbefore % 1 === 0) {
        c = cbefore;
      }
      if ( b < c && a < c ) {
        var sum = a + b + c;
        if  ( sum === 1000 ) {
          console.log(a + " + " + b + " + " + c + " = " + sum + " a * b * c = " + a*b*c)
        }
      }
    }
  }
  `
  constructor(){

    for ( var a = 1; a < 1000; a++ ) {
      for ( var b = a + 1; b < 1000; b++ ) {
        var cbefore = Math.sqrt(a ** 2 + b ** 2)
        var c = 0;
        if ( cbefore % 1 === 0) {
          c = cbefore;
        }
        if ( b < c && a < c ) {
          var sum = a + b + c;
          if  ( sum === 1000 ) {
            console.log(a + " + " + b + " + " + c + " = " + sum + " a * b * c = " + a*b*c)
            this.otvet = [a, b , c]
            this.otvet2 = sum;
            this.otvet3 = a * b * c;
          }
        }
      }
    }
  }

}

