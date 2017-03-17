import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MainService }  from '../../services/main.service';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public days=["0","1","2","3","4"];
  public openMe=false;
  // public menuOpen:Boolean=false;
  // menuSwitch(){
  //   this.menuOpen=!this.menuOpen
  // }

  // public myChild;
   @Input() public myChild:boolean;

  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

}
