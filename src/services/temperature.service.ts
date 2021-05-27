import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IWeatherForecastModel } from 'src/app/models/weatherforecastmodel';
import { IWeatherModel } from 'src/app/models/weathermodel';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string) : Observable<IWeatherModel[]>{     
    return this.http.get<IWeatherModel[]>('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=3d8b309701a13f65b660fa2c64cdc517')
                    .pipe(map((data) => {
                        return data;                        
                      }), catchError( error => {
                        return throwError( 'City not found' );
                      })
                     )
  }
  getForecast(city: string): Observable<IWeatherForecastModel[]>{
    return this.http.get<IWeatherForecastModel[]>('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid=3d8b309701a13f65b660fa2c64cdc517')
                    .pipe(map((data) => {
                        return data;                                                
                      }), catchError( error => {
                        return throwError( 'Unable to find the data' );
                      })
                     )
  }
}
