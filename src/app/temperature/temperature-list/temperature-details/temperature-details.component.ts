import {Component, OnInit} from '@angular/core';
import {TemperatureService} from "../../temperature.service";
import {TemperatureModel} from "../../temperature-model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-temperature-details',
  templateUrl: './temperature-details.component.html',
  styleUrls: ['./temperature-details.component.css']
})
export class TemperatureDetailsComponent implements OnInit {

  temperatures: TemperatureModel[] = [];

  constructor(private temperatureService: TemperatureService,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    this.getTemperatures(id!);
  }

  getTemperatures(deviceId: string) {
    this.temperatureService.getTemperaturesByRoute(deviceId).subscribe(
      res => this.temperatures = res
    )
  }
}
