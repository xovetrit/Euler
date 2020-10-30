import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  fib = [];
  fibFilter4000000 = [];
  fibFilterEven = [];
  fibSumEven4000000 = 0;

  constructor() {

    for (var i = 1; i < 40; i++ ) {

      if ( i <= 2 ){
       this.fib[i-1] = i;
      }  
      else {
        this.fib[i-1] = this.fib[i - 2] + this.fib[i - 3];
      }
    }


    for ( var i = 0; i < this.fib.length; i++ ){
      if ( this.fib[i] >= 4000000 ) {
        break;
      }
      else {
        this.fibFilter4000000[i] = this.fib[i];
      }
    }

    var y = 0;
    for ( var i = 0; i < this.fibFilter4000000.length; i++){
      if ( this.fibFilter4000000[i] % 2 == 0 ) {
        this.fibFilterEven[y] = this.fibFilter4000000[i];
        y++;
      }
    }

    for ( var i = 0; i < this.fibFilterEven.length; i++ ){
      this.fibSumEven4000000 += this.fibFilterEven[i];
    }

    // console.log(this.fib);
    // console.log(this.fibFilter4000000);
    // console.log(this.fibFilterEven); 
    // console.log(this.fibSumEven4000000);
  }
}
