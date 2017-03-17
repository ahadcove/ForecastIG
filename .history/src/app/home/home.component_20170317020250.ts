import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  // template:  `./home.component.html`,
  template:  `<div class="home">
    <app-forecast></app-forecast>
    <app-foot></app-foot>
</div>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
