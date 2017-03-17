import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './shared/forecast/forecast.component';
import { FootComponent } from './shared/foot/foot.component';
import { InformationComponent } from './shared/information/information.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NavComponent } from './shared/nav/nav.component';
import { DayComponent } from './shared/day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent,
    FootComponent,
    InformationComponent,
    LoadingComponent,
    MenuComponent,
    NavComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
