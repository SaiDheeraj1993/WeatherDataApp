import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TemperatureService } from 'src/services/temperature.service';
import { IWeatherModel } from '../models/weathermodel';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const weatherModel : IWeatherModel = 
  {   
    base: "stations",
    clouds: {
      all: 1
    },
    cod: 200,
    coord: {
      lon: -122.08,
      lat: 37.39
    },
    dt: "1560350645",
    id: 420006353,
    main: {
      temp: 282.55,
      feels_like: 281.86,
      temp_min: 280.37,
      temp_max: 284.26,
      pressure: 1023,
      humidity: 100,
      grnd_level: 10,
      sea_level :10
    },
    visibility: 16093,
    rain: {
      '1h': 7,
    },
    wind: {
      speed: 1.5,
      deg: 350,
      gust:20
    },    
    sys: {
      type: 1,
      id: 5122,
      country: "GB",
      sunrise: "1560343627",
      sunset: "1560396563"
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d"
      }
    ],
    timezone: 3600,    
    name: "London",    
  };
  beforeEach(async () => {
    const route = new ActivatedRoute();
    const httpClientSpy = jasmine.createSpyObj('HttpClient',['getCurrentWeather']);
    const temperatureServiceSpy = jasmine.createSpyObj('TemperatureService',['getCurrentWeather']);

     temperatureServiceSpy.getCurrentWeather.and.returnValue(of(weatherModel));
     TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ],
      declarations: [ HomeComponent ],
      providers :[        
        { provide:ActivatedRoute, useValue :route },
        { provide:HttpClient, useValue :httpClientSpy },
        { provide: TemperatureService, useValue: temperatureServiceSpy} 
      ]
    })
    .compileComponents();
  });  

  it('should create the home component', () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
