import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {TemperatureModel} from "./temperature-model";
import {RestApiService} from "../core/services/rest-api.service";
import {TemperatureModule} from "./temperature.module";

interface MessageData {
  message: string;
  time?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TemperatureService {

  constructor(private apiService: RestApiService) {}

  public getTemperatures(): Observable<TemperatureModel[]> {
    return this.apiService.get<TemperatureModel[]>(`/temperatures`);
  }

  public addTemperatures(data: any): Observable<any> {
    return this.apiService.post<any>(`/temperatures`, data);
  }

  public getTemperaturesByRoute(deviceId: any): Observable<TemperatureModel[]> {
    return this.apiService.get<TemperatureModel[]>(`/devices/` + deviceId + `/temperatures`);
  }

}
