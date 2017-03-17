import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MainService {
  private apiCall:string = "http://api.openweathermap.org/data/2.5/forecast?q=Atlanta,us&units=imperial&mode=json&appid=c835798f91de1f2008bdf0a94202cc11";
  private apiObj:any;

// This will keep track of what day of the week it is
  private currDay;

// List that keeps track of where we found the first new day
  private list =[];

// Keeps track of where the index is
  private listTracker;

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

  checkReady(){
    return new Promise((resolve,reject) =>{
       if(this.apiObj)
        resolve(true)
       else 
        reject(`Not Ready`);
    });
  }

    subscribeWeather(){
    this.http.get(this.apiCall)
            .map(res=> res.json())
            .subscribe(res => {
              this.apiObj=res;
              console.log("Res is ", this.apiObj);
              this.router.navigate(["home"],{ skipLocationChange: true });
            });
  }

  constructor (private http: Http, private router:Router) {
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
  getDay(){


    var pack={
      "weekDay":"",
      "weather":""
    }
    
    if(this.firstDay){

      this.listTracker=0;

      var apiDay = this.apiObj.list[this.listTracker].dt;
      var apiDayTxt = this.apiObj.list[this.listTracker].dt_txt;
      // Day: Obj -> list[num] -> dt_text

      // Multiply by 1000 to get it in milliseconds
      var date = new Date(apiDay*1000);
      console.log("First day is: ",date.getUTCDay());

      // this.list.push(date.getUTCDay());
      this.list.push(this.listTracker);
      this.weekDay(date.getUTCDay());
      this.currDay = date.getUTCDay();
        this.firstDay=false;
          //  return this.list[this.currDay];
       return this.currDay;
      }
    else{
      console.log("-------Starting new test-------");
      console.log(`Last day was ${this.list[this.currDay]}`);
      this.findNextDay();
      var apiDay = this.apiObj.list[this.list[this.currDay]].dt;
      var apiDayTxt = this.apiObj.list[this.list[this.currDay]].dt_txt;
      // Day: Obj -> list[num] -> dt_text

      // Multiply by 1000 to get it in milliseconds
      var date = new Date(apiDay*1000);
      console.log("My day is: ",date.getUTCDay());
      this.weekDay(date.getUTCDay());

          //  return this.list[this.currDay];
           return this.currDay;

    }

      // this.apiObj.list[this.currDay].dt
      // this.apiObj.list[this.currDay].dt

      // this.currDay=0;
      // return this.currDay;
  }

  findNextDay(){
    // We will start the loop from the last day we found at api location and iterate until we find the next day
    for(var iterDays = this.list[this.listTracker] + 1; iterDays<this.apiObj.list.length; iterDays++){
      var testDate = new Date((this.apiObj.list[iterDays].dt)*1000);
      console.log(`test day is ${testDate.getDay()}`);
      console.log(testDate.getDay() != this.currDay);
      if(testDate.getDay() != this.currDay){
        this.list.push(iterDays);
        this.currDay = iterDays;
        this.listTracker++;
        console.log("The day is ", iterDays);
        return;
      }
    }
  }

  // isFirstDay(){
  //   var today = new Date();
  //   console.log(`Today is: ${today.getTime()}`);
  //   // console.log(`Today is UTCHours : ${today.getUTCHours()}`);
  //   // console.log(`Today is UTCMins: ${today.getUTCMinutes()}`);
  //   // console.log(`Today is UTCSecs: ${today.getUTCSeconds()}`);
  //   // console.log(`Today is UTCMilli: ${today.getUTCMilliseconds()}`);
  //   this.firstDay=false;
  // }

weekDay(dayNum){
  var weekDay=[
    "Sunday","Monday","Tuesday","Wednesday",
    "Thursday","Friday","Saturday",
  ];
  console.log("day of the week is ",weekDay[dayNum]);
  return weekDay[dayNum];
// weekday[0] =  "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
}
  
}
