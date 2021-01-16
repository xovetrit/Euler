import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  otvet = 0;

  code = `
  var sum = 0;    
  for ( var i = 1; i <= 2000; i++ ) {
    var count = 0;
    for ( var y = 1; y <= i; y++) {
      if ( i % y === 0 ) {
        count++;
      }
    }
    if ( count === 2 ) {
      sum += i
    }
  }
  console.log(sum)
 
  `
  constructor(){
    
    var sum = 0;    
    for ( var i = 1; i <= 2000; i++ ) {
      var count = 0;
      for ( var y = 1; y <= i; y++) {
        if ( i % y === 0 ) {
          count++;
        }
      }
      if ( count === 2 ) {
        sum += i
      }
    }
    console.log(sum)
    this.otvet = sum
  }


}

