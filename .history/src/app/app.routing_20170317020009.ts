import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainService } from './services/main.service';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
// import { ForecastComponent } from './shared/forecast/forecast.component';
// import { FootComponent } from './shared/foot/foot.component';
// import { InformationComponent } from './shared/information/information.component';
// import { DayComponent } from './shared/day/day.component';


const routes: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'home', component: HomeComponent },
//   {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/'} 
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
      ],
  exports: [
      RouterModule
      ],
  providers: [ MainService],
})
  export class AppRoutingModule {}
