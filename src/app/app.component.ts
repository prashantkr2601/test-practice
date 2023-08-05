import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cardImgeData: any = [];
  constructor() {
    this.cardImgeData = [
      'https://cdn.testbook.com/resources/productionimages/Varinder%20Grover_All_1658412204.png',
      'https://cdn.testbook.com/resources/productionimages/Varinder%20Grover_All_1658412204.png',
      'https://cdn.testbook.com/resources/productionimages/Varinder%20Grover_All_1658412204.png',
      'https://cdn.testbook.com/resources/productionimages/Varinder%20Grover_All_1658412204.png',
      'https://cdn.testbook.com/resources/productionimages/Varinder%20Grover_All_1658412204.png',
    ];
  }
  title = 'test-practice';
}
