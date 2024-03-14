import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'c84c1eddcb3c762d7da35024f66dc641';

  constructor(private http:HttpClient) {}

  getWeatherDatas(cityName: String): Observable<any>
  {
    return this.http.get(
     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    );
  }
}
