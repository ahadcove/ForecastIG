import { Component, Input, OnInit } from '@angular/core';
// import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public pack;
  constructor(private main:MainService) {}
  // constructor(private modalService: NgbModal) {}
  
  // @Input() openMe:Boolean;
  // @Input() myChild:Boolean;
  public openME;

  ngOnInit() {
  }

  //  closeResult: string;


  openModal(findDay) {
    this.pack = this.main.getMoreInfo(findDay);
    this.myChild=true;
    console.log(findDay);
    // this.modalService.open(, { windowClass: 'dark-modal' });
  }

}
