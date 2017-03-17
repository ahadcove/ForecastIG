import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public days=["0","1","2","3","4"];
  public openMe=false;
   @Input() public myChild:boolean;

  constructor() { }

  ngOnInit() {
  }

}
