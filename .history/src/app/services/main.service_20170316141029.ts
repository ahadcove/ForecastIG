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
  private currDay;

  private list =[];

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
  getDay(){


    // var pack={
    //   "weekDay":"",
    //   "weather":""
    // }
    
    // if(this.firstDay){
    //   // this.isFirstDay();
    //   this.currDay=0;
    //   this.list.push(this.currDay);
    //   var apiDay = this.apiObj.list[this.list[this.currDay]].dt;
    //   var apiDayTxt = this.apiObj.list[this.list[this.currDay]].dt_txt;
    //   // Day: Obj -> list[num] -> dt_text

    //   // Multiply by 1000 to get it in milliseconds
    //   var date = new Date(apiDay*1000);
    //   console.log("My day is: ",date.getUTCDay());
    //   this.weekDay(date.getUTCDay());

    //       //  return this.list[this.currDay];
    //        return this.currDay;

    //   }
    // else{
    //   // this.findNextDay();
    //   var apiDay = this.apiObj.list[this.list[this.currDay]].dt;
    //   var apiDayTxt = this.apiObj.list[this.list[this.currDay]].dt_txt;
    //   // Day: Obj -> list[num] -> dt_text

    //   // Multiply by 1000 to get it in milliseconds
    //   var date = new Date(apiDay*1000);
    //   console.log("My day is: ",date.getUTCDay());
    //   this.weekDay(date.getUTCDay());

    //       //  return this.list[this.currDay];
    //        return this.currDay;

    // }

      // this.apiObj.list[this.currDay].dt
      // this.apiObj.list[this.currDay].dt

      this.currDay=0;
      return this.currDay;
  }

  findNextDay(){
    for(var iterDays = this.list[this.currDay]; iterDays<this.apiObj.list.length; iterDays++){
      var testDate = new Date((this.apiObj.list[iterDays].dt)*1000);
      if(testDate == this.currDay+1){
        this.list.push(iterDays);
        this.currDay++;
        console.log("The day is ", iterDays);
        break;
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
