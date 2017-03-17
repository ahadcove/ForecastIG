import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

   closeResult: string;


  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}
