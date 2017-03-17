import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() dayNum;

  constructor() { }

  ngOnInit() {
    console.log("My day is: ", this.dayNum);
    // alert("day works");
  }

}
