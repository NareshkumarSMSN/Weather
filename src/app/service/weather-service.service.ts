import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private readonly httpClientService:HttpClient) { }

  fetchData(cityName:string){
    return this.httpClientService.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b16044a87ee96615092a554d95f34ad3`);
  }
}
