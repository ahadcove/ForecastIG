import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public ultraPack;
  constructor(private main:MainService, private modalService: NgbModal) {}
  // constructor(private modalService: NgbModal) {}
  
  // @Input() openMe:Boolean;
  @Input() myChild:Boolean;

  ngOnInit() {
  }

   closeResult: string;


  openModal(findDay) {
    this.ultraPack = this.main.getMoreInfo(findDay);
    console.log(findDay);
    // this.modalService.open(, { windowClass: 'dark-modal' });
  }

}
