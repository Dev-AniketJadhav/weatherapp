// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApixuService {

//   constructor(private http: HttpClient) { }
//   getWeather(location: string): Observable<Object>{
//     return this.http.get(
//         'https://api.apixu.com/v1/current.json?key=d2fcef881e3acff943ead2d2e172d179&q=' + location
//     );
// }
// }
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather( location: string)  {
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=d2fcef881e3acff943ead2d2e172d179&query=" +location,
      
         
    
      );
    
      
  }
  getHistory( location: string)  {
    return this.http.get(
      "http://api.weatherstack.com/historical?access_key=d2fcef881e3acff943ead2d2e172d179&query=" +location,
      
         
    
      );
    
      
  }
  
}
