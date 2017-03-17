import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MainService {
  private apiCall:string = "http://api.openweathermap.org/data/2.5/forecast?q=Atlanta,us&units=imperial&mode=json&appid=c835798f91de1f2008bdf0a94202cc11";
  private apiObj:any;

// This will keep track of what day needs to be called and at what time
  private day;

// Keep track if this is first day or not
  private firstDay:boolean;

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
    this.firstDay=true;
    this.subscribeWeather();
  }

  getObj(){
    return this.apiObj;
  }

// Will receive location in a tidy format
  getLocation(){
    var myLoc={
      city:"" ,
      state:"",
      country:"",
      zip:"",
    }
  }

// Will retrieve specified day: day 1 = today up to day 5
  getDay(num){
    if(this.apiObj){
      if(this.firstDay)
        this.isFirstDay();
      
      var currDay = this.apiObj.list[num].dt
      // Day: Obj -> list[num] -> dt_text
      console.log("My day is: ",currDay.Date.parse());
      // return this.apiObj.list[num].dt_txt;
      return currDay;
    }

    // if getDay() is not ready yet
    else {
      return false;
    }
  }

  isFirstDay(){
    var today = new Date();
    console.log(`Today is: ${today.getTime()}`);
    console.log(`Today is UTCHours : ${today.getUTCHours()}`);
    console.log(`Today is UTCMins: ${today.getUTCMinutes()}`);
    console.log(`Today is UTCSecs: ${today.getUTCSeconds()}`);
    console.log(`Today is UTCMilli: ${today.getUTCMilliseconds()}`);
    this.firstDay=false;
  }
  
}
