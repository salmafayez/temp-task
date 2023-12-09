export class TemperatureModel {
  constructor(
    public id: number,
    public deviceId: number,
    public value: number,
    public creationDate: Date,
    public updateDate: Date) {}
}
