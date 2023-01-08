export default class Plane {
  constructor(
    public planeName: string = '',
    public destination: string = '',
    public finished: boolean,
    public currentStation: string = '',
    public timeOfAction?: Date
  ) {}
}
