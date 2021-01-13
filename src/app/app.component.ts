import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  code = `
  constructor(){

    var PalindromeArr = [];
    var index = 0;

    for (var x = 100; x <= 999; x ++ ) {
      for ( var y = 100; y <= 999; y++ ) {
        var sum =  x * y
        var sumStr = sum.toString()
        var sumSplit = sumStr.split("")
        var sumReverse =  sumSplit.reverse().join("")
        if ( sumStr === sumReverse) {
          PalindromeArr[index++] = sumStr;
        }
      }
    }
    var max = Math.max(...PalindromeArr)
    console.log("Max Palindrome: " + max)

  }`


  MaxPalindrome = 0;

  constructor(){

    var PalindromeArr = [];
    var index = 0;

    for (var x = 100; x <= 999; x ++ ) {
      for ( var y = 100; y <= 999; y++ ) {
        var sum =  x * y
        var sumStr = sum.toString()
        var sumSplit = sumStr.split("")
        var sumReverse =  sumSplit.reverse().join("")
        if ( sumStr === sumReverse) {
          PalindromeArr[index++] = sumStr;
        }
      }
    }
    var max = Math.max(...PalindromeArr)
    this.MaxPalindrome = max;
    console.log("Max Palindrome: " + max)

  }

}

