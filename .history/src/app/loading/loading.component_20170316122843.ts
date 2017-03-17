import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Router }  from '@angular/router';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(private main:MainService, private router:Router ) { }

  ngOnInit() {
    this.router.navigate(["home"]);
  }

}
