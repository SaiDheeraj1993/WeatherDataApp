import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemperatureService } from './../../services/temperature.service';
import { TempModel } from '../models/tempmodel';
import { IWeatherModel } from '../models/weathermodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities : any[] = ['London','Oxford','Liverpool','Cambridge','Cardiff']
  currentWeather! : IWeatherModel;  
  tempModels : TempModel[]=[];
  constructor(private route: Router,private temperatureService: TemperatureService) { }

  ngOnInit(){   
    this.cities.forEach( city => this.getWeather(city));
 } 
  selectedCity(event:any){
    this.route.navigate(['/forecast'], { state: { city: event.target.innerText } });
  }

  private getWeather(city:string){   
    this.temperatureService.getCurrentWeather(city)
    .subscribe((response:any ) => {      
      this.currentWeather = response;     
      const sunrise= new Date(+this.currentWeather ["sys"].sunrise *1000);
      const sunset= new Date(+this.currentWeather ["sys"].sunset *1000);
      var tempModel = new TempModel(this.currentWeather ["name"],
                            this.currentWeather ["main"].temp,
                            sunrise.toISOString().substr(11,5),
                            sunset.toISOString().substr(11,5),
                            this.currentWeather["weather"][0].icon)
       this.tempModels.push(tempModel);       
    }); 
  }  
}

