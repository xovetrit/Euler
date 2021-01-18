import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  otvet = 0;

  code = `
  var arr = [];
  var index = 0;
  var sum = 0;

  for ( var x = 1; x <= 13000; x++ ) {
    arr[index++] = x + sum;
    sum += x;
  }

  for ( var y = 0; y <= arr.length; y++ ) {
    let count = 0;
    for ( var z = 1; z <= arr[y]; z++) {
      if ( arr[y] % z === 0 ) {
        count++;
      }
      if ( count > 500) {
        console.log(arr[y])
        break;
      }
    }
  }
  `
  constructor(){
    
    var arr = [];
    var index = 0;
    var sum = 0;

    for ( var x = 1; x <= 13000; x++ ) {
      arr[index++] = x + sum;
      sum += x;
    }

    for ( var y = 0; y <= arr.length; y++ ) {
      let count = 0;
      for ( var z = 1; z <= arr[y]; z++) {
        if ( arr[y] % z === 0 ) {
          count++;
        }
        if ( count > 500) {
          console.log(arr[y])
          this.otvet = arr[y]
          break;
        }
      }
    }

  }


}

