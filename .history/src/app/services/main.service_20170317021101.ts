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
  private currDay:number;

// List that keeps track of where we found the first new day in the API list
  private list:Array<number>=[];

// Keeps track of where the index is
  private listTracker:number;

// Keep track if this is first day or not
  private firstDay:Boolean;

// Map and subscribes to api to get back the json Object
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
    this.listTracker=0;
    this.subscribeWeather();
  }

  getObj(){
    return this.apiObj;
  }


// Will retrieve specified day: day 1 = today up to day 5
  getDay(){
    var pack={
      "listNum":null,
      "weekDay":"",
      "fullDate":"",
      "icon":"",
      "weather":"",
      "weatherDesc":"",
      "temp":{
        "high":"",
        "low":"",
        "reg":""
      }
    }
    
    if(this.firstDay){
    
      var apiDay = this.apiObj.list[this.listTracker].dt;
      var apiDayTxt = this.apiObj.list[this.listTracker].dt_txt;
      console.log(this.apiObj.list[this.listTracker].dt_txt);
      var date = new Date(apiDay*1000);
      var fuDate = date.toDateString();
      console.log("First day is: ",date.getUTCDay());

      this.list.push(this.listTracker);
      this.weekDay(date.getUTCDay());
      this.currDay = date.getUTCDay();
      this.firstDay=false;
      var icon = this.apiObj.list[this.listTracker].weather[0].icon;

      pack.listNum = this.list[this.listTracker];
      pack.temp.high = this.apiObj.list[this.listTracker].main.temp_max;
      pack.temp.low = this.apiObj.list[this.listTracker].main.temp_min;
      pack.temp.reg = this.apiObj.list[this.listTracker].main.temp;
      pack.weatherDesc =  this.apiObj.list[this.listTracker].weather[0].description;
      pack.weather =  this.apiObj.list[this.listTracker].weather[0].main;
      pack.icon = `http://openweathermap.org/img/w/`+icon+'.png';
      pack.fullDate = fuDate.toString();
      pack.weekDay = this.weekDay(date.getUTCDay());

       return pack;
      }
    
    // If this is not the first day we have to iterate through the API Object to find the next day
    else{
      console.log("-------Starting new test-------");
      console.log(`Last day was ${this.list[this.listTracker]}`);
      this.findNextDay();
      var apiDay = this.apiObj.list[this.list[this.listTracker]].dt;

      // Multiply by 1000 to get it in milliseconds
      var date = new Date(apiDay*1000);
      var fuDate = date.toDateString();
      var icon = this.apiObj.list[this.listTracker].weather[0].icon;
      console.log("My day is: ",date.getUTCDay());
      pack.listNum = this.list[this.listTracker];
      pack.temp.high = this.apiObj.list[this.listTracker].main.temp_max;
      pack.temp.low = this.apiObj.list[this.listTracker].main.temp_min;
      pack.temp.reg = this.apiObj.list[this.listTracker].main.temp;
      pack.weatherDesc =  this.apiObj.list[this.listTracker].weather[0].description;
      pack.weather =  this.apiObj.list[this.listTracker].weather[0].main;
      pack.icon = `http://openweathermap.org/img/w/`+icon+'.png';
      pack.fullDate = fuDate.toString();
      pack.weekDay = this.weekDay(date.getUTCDay());

      return pack;
    }
  }

  findNextDay(){
    // We will start the loop from the last day we found at api location and iterate until we find the next day
    for(var iterDays = this.list[this.listTracker] + 1; iterDays<this.apiObj.list.length; iterDays++){
      var testDate = new Date((this.apiObj.list[iterDays].dt)*1000);
      console.log(`Test day iter ${iterDays} is ${testDate.getDay()}`);
      console.log(testDate.getDay() != this.currDay);
      if(testDate.getDay() != this.currDay){
        this.list.push(iterDays);
        this.currDay = testDate.getDay();
        this.listTracker++;
        console.log("Found at position ", iterDays);
        console.log(`List: ${this.list}`)
         return true;
      }
    }
  }



weekDay(dayNum){
  var weekDay=[
    "Sunday","Monday","Tuesday","Wednesday",
    "Thursday","Friday","Saturday",
  ];
  console.log("day of the week is ",weekDay[dayNum]);
  return weekDay[dayNum];
}

// More Information for said day
getMoreInfo(findDay){
  var ultraPack={
      "country":null,      
      "city":null,
      "pressure":null,
      "sea_level":null,
      "wind":null,
      "listNum":null,
      "weekDay":"",
      "fullDate":"",
      "icon":"",
      "weather":"",
      "weatherDesc":"",
      "temps":[]
   };

   ultraPack.temps = this.fillTemps(findDay);

    var apiDay = this.apiObj.list[findDay].dt;
    var date = new Date(apiDay*1000);
    var fuDate = date.toDateString();
    var icon = this.apiObj.list[findDay].weather[0].icon;

    ultraPack.listNum = this.list[findDay];
    ultraPack.weatherDesc =  this.apiObj.list[findDay].weather[0].description;
    ultraPack.weather =  this.apiObj.list[findDay].weather[0].main;
    ultraPack.icon = `http://openweathermap.org/img/w/`+icon+'.png';
    ultraPack.fullDate = fuDate.toString();
    ultraPack.weekDay = this.weekDay(date.getUTCDay());

    ultraPack.country = this.apiObj.city.country;
    ultraPack.city = this.apiObj.city.name;
    ultraPack.pressure = this.apiObj.list[findDay].main.pressure;
    ultraPack.sea_level = this.apiObj.list[findDay].main.sea_level;
    ultraPack.wind = this.apiObj.list[findDay].wind.speed;
  return ultraPack;
}

// Fill temperatures according to how much room we have between today and the next
fillTemps(thisDay){
  console.log("------Calculating Inices---------");
  var currIndex = this.list.indexOf(thisDay);
  var tempPack=[];
  var nextIndex = this.list[currIndex];
  var isLastIndex;
  var nextDay;
  if(this.list[currIndex+1]){
       isLastIndex=false;
       nextDay = this.list[currIndex+1];
      console.log(`On Day ${thisDay} at index ${this.list[currIndex]} up to ${nextDay}`);
  }
  else{
      isLastIndex=true;
      nextDay = 40;
      console.log(`On Last Day ${thisDay} at index ${this.list[currIndex]} up to ${nextDay}`);
  }
  for(var i = 0;i<3;i++){
      var currPack= {
          "time" : null,
          "icon" : null,
          "weather" : null,
          "weatherDesc" : null,
          "reg" : null,
          "high" : null,
          "low" : null
        }
      var icon = this.apiObj.list[nextIndex].weather[0].icon;
      var dtTime= this.apiObj.list[nextIndex].dt;
      var time = new Date(dtTime*1000);
      

      currPack.time = time.toLocaleTimeString();
      currPack.icon = `http://openweathermap.org/img/w/`+icon+'.png';
      currPack.weather = this.apiObj.list[nextIndex].weather[0].main;
      currPack.weatherDesc = this.apiObj.list[nextIndex].weather[0].description;
      currPack.reg = this.apiObj.list[nextIndex].main.temp;
      currPack.high = this.apiObj.list[nextIndex].main.temp_max;
      currPack.low = this.apiObj.list[nextIndex].main.temp_min;
      console.log(currPack);
      tempPack.push(currPack);
      nextIndex = this.calcNextIndex(thisDay, nextDay, nextIndex);
  }
          return tempPack;
  }

// This gives us a safe Index making sure that there are no repetitions
// Divide the curr Place by 3 to splt the day into third rounding down
calcNextIndex(thisDay, nextDay, nextIndex){
  var hourInDay = (nextDay-1)-(nextIndex+1);
  console.log(`Hours in today ${hourInDay}`);
  if(hourInDay>6)
    var incrementIndex = hourInDay/2;
  else if(hourInDay>3)
    var incrementIndex = hourInDay/2;
  else
    var incrementIndex = 1;
  // console.log("NextIndex will be, ", Math.floor(nextIndex+incrementIndex));
  return (Math.floor(nextIndex+incrementIndex));

  
}

}
