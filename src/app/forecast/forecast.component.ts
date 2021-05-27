import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemperatureService } from './../../services/temperature.service';
import { ForecastModel } from '../models/forecastmodel';
import { IWeatherForecastModel } from '../models/weatherforecastmodel';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  currentForecast !: IWeatherForecastModel;
  forecastModels : ForecastModel[]=[];
  city : string;
  constructor(private temperatureService: TemperatureService,private router: Router) { 
    this.city=this.router.getCurrentNavigation()?.extras.state?.city;
  }

  ngOnInit(): void {
    this.getforecast(this.city);   
  }

  private getforecast(city:string){
    this.temperatureService.getForecast(city)
    .subscribe((response:any ) => {      
      this.currentForecast = response;
      for(let i=0;i< this.currentForecast["list"].length;i++)
      {        
        if(this.currentForecast["list"][i].dt_txt.includes("09",10)){
          const date= new Date(+this.currentForecast["list"][i]["dt"] *1000);
          var foreCastModel= new ForecastModel(
                                   date.toLocaleDateString(),
                                   this.currentForecast["list"][i]["main"].temp,
                                   this.currentForecast["list"][i]["main"].sea_level,
                                   this.currentForecast["list"][i]["weather"][0].icon
                                   )
          this.forecastModels.push(foreCastModel);           
        }
      }
    })
  }
}
