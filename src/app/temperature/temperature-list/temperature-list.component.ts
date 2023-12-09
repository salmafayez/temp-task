import {Component, OnDestroy, OnInit} from '@angular/core';
import {TemperatureService} from "../temperature.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TemperatureModel} from "../temperature-model";

@Component({
  selector: 'app-temperature-list',
  templateUrl: './temperature-list.component.html',
  styleUrls: ['./temperature-list.component.css']
})
export class TemperatureListComponent implements OnInit, OnDestroy {

  temperatures: TemperatureModel[] = [];
  addForm! : FormGroup;
  webSocket!: WebSocket;
  WEB_SOCKET_URL = 'ws://localhost:8080/temperatures';

  constructor(private temperatureService: TemperatureService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.addForm = this.buildFrom();
    this.getTemperatures();
    this.webSocket = new WebSocket(this.WEB_SOCKET_URL);
    this.webSocket.onmessage = (event: { data: any; }) => {
      this.handleNewDate(JSON.parse(event.data))
    };
  }

  private handleNewDate(updatedTemperatures: TemperatureModel[]) {
    for(const newTemp of updatedTemperatures) {
      let number = this.temperatures
        .findIndex(temp => temp.deviceId == newTemp.deviceId);
      if(number >= 0) {
        this.temperatures[number] .value = newTemp.value;
      } else {
        this.temperatures.push(newTemp);
      }
    }
  }

  private buildFrom() {
    return this.formBuilder.group({
      temperature: ['', [
        Validators.required
      ]]
    });
  }

  getTemperatures() {
    this.temperatureService.getTemperatures().subscribe(
      res => this.temperatures = res
    )
  }

  addTemperature() {
    let value = this.addForm.value.temperature;
    this.temperatureService.addTemperatures(
      { "data": value }
    )
      .subscribe(
        (next) =>{
          console.log(next)
        }
      )
  }

  ngOnDestroy(): void {
    this.webSocket.close();
  }

}
