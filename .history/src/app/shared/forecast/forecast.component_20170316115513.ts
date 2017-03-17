import { Component, OnInit } from '@angular/core';
import { MainService }  from '../../services/main.service';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public days=[1,2,3,4,5];
  
  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

}
