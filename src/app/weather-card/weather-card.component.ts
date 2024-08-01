import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WeatherServiceService } from '../service/weather-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
  providers:[WeatherServiceService]
})
export class WeatherCardComponent implements  OnInit {
  loading=false;
  cityName="Chennai";
  error="";
  data={
    temp: String,
    FeelsLike:String,
    Pressure:String,
    temp_min:String,
    temp_max:String,
    name:String,
    icon:String,
    humidity:String,
    base:String
  }


  constructor(private readonly weatherService:WeatherServiceService){}

  ngOnInit():void{
    this.loadData();
  }

  loadData(){
    if(this.cityName){
      this.loading=true;
      console.log(this.cityName)
      this.weatherService.fetchData(this.cityName).subscribe({
        next:(data:any)=>{
          this.loading=true;
          console.log("Data:",data);
          this.data.base=data.base;
          this.data.temp=data.main.temp;
          this.data.FeelsLike=data.main.feels_like;
          this.data.Pressure=data.main.pressure;
          this.data.temp_min=data.main.temp_min;
          this.data.temp_max=data.main.temp_max;
          this.data.name=data.name;
          this.data.icon=data.weather[0].icon;
          this.data.humidity=data.main.humidity;
          //Error message Releaesing
          this.error='';
          this.loading=false;
        },
        error:(err)=>{
          console.log("Error:",err);
          this.error=err.message;
          console.log(this.error);
        }
      });
    
  }
  // this.loading=false;
  }

}
