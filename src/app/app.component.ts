import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  otvet = 0;

  code = `
     var summa10 = 0;

      var summaKvadratov = 0;
      var kvadratSummy = 0;
      var raznost = 0;

      for ( var x = 1; x <= 100; x++) {
        summaKvadratov += x ** 2
        summa10 += x
      } 

      kvadratSummy = summa10 ** 2
      raznost = kvadratSummy - summaKvadratov
  `
  constructor(){

    var summa10 = 0;

    var summaKvadratov = 0;
    var kvadratSummy = 0;
    var raznost = 0;

    for ( var x = 1; x <= 100; x++) {
      summaKvadratov += x ** 2
      summa10 += x
    } 

    kvadratSummy = summa10 ** 2
    raznost = kvadratSummy - summaKvadratov

    this.otvet = raznost

    // console.log("Сумма квадратов: " + summaKvadratov)
    // console.log("Квадрат суммы: " +  kvadratSummy)
    // console.log("Разность: " + raznost)
    

  }

}

