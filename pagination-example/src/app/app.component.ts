import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagination-example';
  collection = [];

  constructor() {
    for(let i=1; i<=100; i++){
      this.collection.push(`Angular ${i}.0`)
    }
  }
}
