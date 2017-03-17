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
  private interval;
  checkReady(){
    this.main.checkReady()
      .then((isReady) =>{
        if(isReady){
              // this.router.navigate(["home"],{ skipLocationChange: true });
              clearInterval(this.interval);
       }
      })
      .catch((e)=>{
        console.log("error can't find data");
      })
                    this.router.navigate(["home"],{ skipLocationChange: true });

  }

  ngOnInit() {
    this.interval = setInterval(_=>this.checkReady());
  }

}
