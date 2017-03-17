import { Component, Input, Output, EventEmitter, trigger, state, style, transition, animate, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
    animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'scale(0)', opacity: 0}),
          animate('500ms', style({transform: 'scale(1)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'scale(1)', opacity: 1}),
          animate('500ms', style({transform: 'scale(0)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class InformationComponent implements OnInit {
  public pack;
  constructor(private main:MainService) {
  }
  public openMe;

  ngOnInit() {

  }



  openModal(findDay) {
    this.pack = this.main.getMoreInfo(findDay);
    this.openMe=true;
    console.log(findDay);
  }

  closeInfo(){
    this.openMe=false;
  }

}
