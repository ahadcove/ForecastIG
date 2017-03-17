import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() dayNum;
  @Input() openMe;

  // private day:any;
  private pack:any;
  constructor(private main:MainService ) { 

  }

  getDay(){
    this.pack=this.main.getDay();
  }

  @Output() open = new EventEmitter();
  openModal(){
    console.log("Trying to open");
    this.open.emit(this.pack);
  }

  ngOnInit() {
    // while(!this.day){
    //   this.getDay();
    // }
    this.getDay();
  }

}
