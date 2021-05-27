export interface IWeatherForecastModel {
    city:City;
    cnt: number;
    cod: number;   
    list: List[]; 
}

interface City {
    coord:Coord;
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: string;
    sunset: string;
    timezone: number;
  }
  
  interface Clouds {
    all: number;
  }

  interface Coord {
    lon: number;
    lat: number;
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

  interface Main {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number
    temp: number; 
    temp_kf:number;   
    temp_min: number;
    temp_max: number;    
  }
  interface List{
    clouds: Clouds;
    dt: number;
    dt_txt: string;
    main: Main;
    pop: number
    sys: Sys;
    visibility: number
    weather: Weather[];
    wind:Wind;
  }