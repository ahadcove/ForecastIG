import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MainService {
  private apiCall:string = "http://api.openweathermap.org/data/2.5/forecast?q=Atlanta,us&units=imperial&mode=json&appid=c835798f91de1f2008bdf0a94202cc11";
  private apiObj:any;

  // subscWeather(){
  //   this.http.get(this.apiCall)
  //   .subscribe(res =>{
  //     this.apiObj = res;
  //     console.log(`API ${res}`);
  //   },
  //     error => alert("Something went wrong; Refresh")
  //   )
  // }
  // subscWeather(){
  //   return this.http.get(this.apiCall)
  //   .map(res => res.json())
  //   // .catch((error:any)=>alert(`ran into an error: ${error.json()}`))
  // }

    subscribeWeather(){
    this.http.get(this.apiCall)
            .map(res=> res.json())
            .subscribe(res => {
              console.log("Res is ", res);
              this.apiObj=res;
            });
  }

  constructor (private http: Http) {
    this.subscribeWeather();
  }

  getObj(){
    return this.apiObj;
  }

// Will receive location in a tidy format
  getLocation(){
    var myLoc={
      city:"",
      state:"",
      country:"",
      zip:"",
    }
  }

// Will retrieve specified day: day 1 = today up to day 5
  getDay(num){
    // Day: Obj -> list[num] -> dt_text
    console.log("My day is: ",this.apiObj.list[num].dt_text);
    return this.apiObj.list[num].dt_text;
  }
  
}
