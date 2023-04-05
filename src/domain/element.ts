interface IPeriodicElement {
  name: string;
  weight: number;
  symbol: string;
  category: string;
  appearance: string;
  color: string;
  value: string;
}

export class PeriodicElement implements IPeriodicElement {
  public name: string = "Hydrogen";
  public weight: number = 1.0079;
  public symbol: string = "H";
  public category: string = "diatomic nonmetal";
  public appearance: string = "colorless gas";
  public color: string = "red";
  public value: string = "#f00";
}
