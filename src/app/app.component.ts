import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  otvet = 0;

  code = `
    var arr = []
    var index = 0;

    for ( var x = 1; x <= 150000; x++ ) {
      var count = 0;
      for ( var y = 1; y <= x; y++ ) {
        if ( x % y === 0 ) {
          count++;
        }
      }
      if ( count === 2 ) {
        arr[index++] = x
      }
      
    }
    console.log(arr[10000])
  `
  constructor(){

    var arr = []
    var index = 0;

    for ( var x = 1; x <= 150000; x++ ) {
      var count = 0;
      for ( var y = 1; y <= x; y++ ) {
        if ( x % y === 0 ) {
          count++;
        }
      }
      if ( count === 2 ) {
        arr[index++] = x
      }
      
    }
    console.log(arr[10000])//10001-1 => потому что с нуля считаем индекс
    this.otvet = arr[10000]
  }

}

