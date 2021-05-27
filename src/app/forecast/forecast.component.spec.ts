import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TemperatureService } from 'src/services/temperature.service';
import { IWeatherForecastModel } from '../models/weatherforecastmodel';
import { ForecastComponent } from './forecast.component';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  const weatherForecastModel : IWeatherForecastModel = 
  {   
    city:{
      coord: {
        lon: -122.08,
        lat: 37.39
      },
      country: "GB",
      id: 1,
      name: "London",
      population: 1000,
      sunrise: "1560343627",
      sunset: "1560396563",
      timezone: 3600,
    },
    cnt : 500,  
    cod:200,   
    list: [
   {
    clouds: {
      all: 1
    },
    dt: 10000559,
    dt_txt: "25/05/2021 09:00",
    main: {      
      feels_like: 281.86,
      grnd_level: 10,
      sea_level :10,
      humidity: 100,
      pressure: 1023,
      temp: 250,
      temp_kf :287,
      temp_min: 280.37,
      temp_max: 284.26,     
    },
    pop: 100,
    sys: {
      type: 1,
      id: 5122,
      country: "GB",
      sunrise: "1560343627",
      sunset: "1560396563"
    },
    visibility: 555,
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d"
      }],
     wind:{
        speed: 1.5,
        deg: 350,
        gust:20
      }
    }
  ]};         

  beforeEach(async () => {
    const route = new ActivatedRoute();
    const httpClientSpy = jasmine.createSpyObj('HttpClient',['getForecast']);
    const temperatureServiceSpy = jasmine.createSpyObj('TemperatureService',['getForecast']);

    temperatureServiceSpy.getForecast.and.returnValue(of(weatherForecastModel));
     TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ],
      declarations: [ ForecastComponent ],
      providers :[        
        { provide:ActivatedRoute, useValue :route },
        { provide:HttpClient, useValue :httpClientSpy },
        { provide: TemperatureService, useValue: temperatureServiceSpy} 
      ]
    })
    .compileComponents();
  });  

  it('should create the forecast component', () => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
