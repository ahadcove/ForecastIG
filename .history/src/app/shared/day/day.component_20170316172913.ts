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
   @Output() child: EventEmitter<string> = new EventEmitter();
 
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
    this.child.emit(name);
    this.open.emit(this.pack);
    this.openMe=true;
  }

  ngOnInit() {
    // while(!this.day){
    //   this.getDay();
    // }
    this.getDay();
  }

}
