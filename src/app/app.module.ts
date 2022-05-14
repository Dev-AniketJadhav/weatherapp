import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApixuService } from "./apixu.service";
import { allAppRoutes } from './routes';
import { HistoricalComponent } from './historical/historical.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HistoricalComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
