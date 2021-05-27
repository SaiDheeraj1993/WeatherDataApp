export interface IWeatherModel {
    base:string;
    clouds: Clouds;
    cod: number;   
    coord: Coord; 
    dt: string;
    id: number; 
    main: Main; 
    name: string; 
    rain: Rain;
    sys:Sys;
    timezone: number;
    visibility:number;
    weather: Weather[];
    wind: Wind;
  }
  
  interface Clouds {
    all: number;
  }

  interface Coord {
    lon: number;
    lat: number;
  }

  interface Main {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;    
    temp_min: number;
    temp_max: number;
  }
  
  interface Rain {
    '1h': number;
  }

  interface Sys {    
    country: string;
    id:number;
    sunrise: string;
    sunset: string;
    type:number;
  }

  interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
  }
  
  interface Wind {
    deg: number;
    gust:number;
    speed: number;
  }
  
  
 
  
  
  
  