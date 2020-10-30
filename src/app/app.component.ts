import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  simpleNumbers = [];
  number = 10000;
  delNumber = 600851475143;
  delNumberSimpleNumbers = [];
  delNumberSimpleNumbersMax = 0;

  constructor(){
    
    var index = 0;
    var count = 0;
    
    for ( var i = 0; i < this.number; i++ ){
       if ( count == 2 ) {
        this.simpleNumbers[index] = i - 1;
        index++;
        count = 0;
      }
      else if ( count > 2 || count == 1 ) {
        count = 0;
      }
      for ( var y = i; y > 0; y-- ){
        if ( i % y == 0) {
          count++;
        }
      }
    }

    var x = 0;
    for ( var i = 0; i < this.simpleNumbers.length; i++ ){
      if ( this.delNumber % this.simpleNumbers[i] == 0 ) {
        this.delNumberSimpleNumbers[x] = this.simpleNumbers[i];
        x++;
      }
    }

    for ( var i = 0; i < this.delNumberSimpleNumbers.length; i++ ){
      if ( i == this.delNumberSimpleNumbers.length - 1 ) {
        this.delNumberSimpleNumbersMax = this.delNumberSimpleNumbers[i];
      }
    }




  }
}

