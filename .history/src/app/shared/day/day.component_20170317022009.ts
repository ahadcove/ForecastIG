import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
   @Output() child: EventEmitter<boolean> = new EventEmitter();
 
  private pack:any;
  constructor(private main:MainService ) { 

  }

  getDay(){
    this.pack=this.main.getDay();
  }


  openModal(){
    console.log("Trying to open");
    this.child.emit(this.pack.listNum);
  }

  ngOnInit() {
    this.getDay();
  }

}
