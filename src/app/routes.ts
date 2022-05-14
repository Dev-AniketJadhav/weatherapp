import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { HistoricalComponent } from './historical/historical.component';
export const allAppRoutes: Routes = [
  { path: '', component: WeatherComponent, }
];