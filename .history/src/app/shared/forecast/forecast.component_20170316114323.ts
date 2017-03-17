import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public days=[1,2,3,4,5];
  constructor(private mainService:MainService) { }

  ngOnInit() {
  }

}
