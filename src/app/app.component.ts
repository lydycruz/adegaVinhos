import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  queryField = new FormControl();
  url:string;

  constructor() { }

  ngOnInit() {
    this.url = `https://google.com/search?q=tipos de uvas`;
  }

  pesquisaUva(){
    window.open(this.url, 'pop', 'width=780,height=550');
    return false
  }

  onSearch(){
    console.log(this.queryField.value);
}
}