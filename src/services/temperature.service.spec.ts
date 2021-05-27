import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

import { TemperatureService } from './temperature.service';
import { HttpClient } from '@angular/common/http';
import { IWeatherModel } from 'src/app/models/weathermodel';
import { IWeatherForecastModel } from 'src/app/models/weatherforecastmodel';

describe('TemperatureService', () => {
  let httpTestingController : HttpTestingController;
  let service: TemperatureService;  
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

  beforeEach(() => {
    TestBed.configureTestingModule({ imports :[HttpClientTestingModule]});

    const httpClient =TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = new TemperatureService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCurrentWeather method should invoke the api', () => {
    const city='London';
    service.getCurrentWeather(city).subscribe(() => {});

    const req = httpTestingController.expectOne('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=3d8b309701a13f65b660fa2c64cdc517');
    expect(req.request.method).toEqual('GET');

    req.flush(weatherModel);    
  });

  it('getForecast method should invoke the api', () => {
    const city='London';
    service.getForecast(city).subscribe(() => {});

    const req = httpTestingController.expectOne('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid=3d8b309701a13f65b660fa2c64cdc517');
    expect(req.request.method).toEqual('GET');

    req.flush(weatherForecastModel);    
  });
});
