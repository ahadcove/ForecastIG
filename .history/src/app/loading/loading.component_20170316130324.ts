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
    this.main.checkReady()
      .then((isReady) =>{
        if(isReady){
              this.router.navigate(["home"],{ skipLocationChange: true });
        }
      })
      .catch((e)=>{
        console.log("error can't find data");
      })
  }

  //  this.main.SetRoom()
  //      .then((isReady) =>{
  //        //After promise is true nav to game
  //        if(isReady){
  //           this.main.stopTimeout();
  //          setTimeout(_=>{
  //            this.router.navigate(['wait'],{ skipLocationChange: true });
  //          },3000)
  //        }
  //        else if(isReady=="offline"){
  //          alert(`You must be connected to the internet before playing,
  //          Please connect and try again!`);
  //        }
  //      })
  //      .catch((e)=> {
  //        this.tried+=1;
  //        console.log(e, " Tried ", this.tried);
  //        if(this.tried==5){
  //          alert(`We Apologize! The Game Has Run Into an Error:
  //            ${e}.`
  //          );
  //        }
  //        else
  //           this.clkStart();
  //   })
  // }

}
