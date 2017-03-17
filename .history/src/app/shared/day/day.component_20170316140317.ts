import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() dayNum;
  private day:any;
  constructor(private main:MainService ) { 

  }

  getDay(){
    this.day=this.main.getDay()
  }

  ngOnInit() {
    while(!this.day){
      this.getDay();
    }
  }

}
