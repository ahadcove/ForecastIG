import { Component, Input, Output, EventEmitter, trigger, state, style, transition, animate, OnInit } from '@angular/core';

// import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
    animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class InformationComponent implements OnInit {
  public pack;
  constructor(private main:MainService) {}
  // constructor(private modalService: NgbModal) {}
  
  // @Input() openMe:Boolean;
  // @Input() myChild:Boolean;
  public openMe;

  ngOnInit() {
  }

  //  closeResult: string;


  openModal(findDay) {
    this.pack = this.main.getMoreInfo(findDay);
    this.openMe=true;
    console.log(findDay);
    // this.modalService.open(, { windowClass: 'dark-modal' });
  }

  closeInfo(){
    this.openMe=false;
  }

}
