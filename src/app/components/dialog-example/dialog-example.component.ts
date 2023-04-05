import { Component } from "@angular/core";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  category: string;
  appearance: string;
  color: string;
  value: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: "Hydrogen",
    weight: 1.0079,
    symbol: "H",
    category: "diatomic nonmetal",
    appearance: "colorless gas",
    color: "red",
    value: "#f00",
  },
  {
    position: 2,
    name: "Helium",
    weight: 4.0026,
    symbol: "He",
    category: "diatomic nonmetal",
    appearance: "colorless gas",
    color: "green",
    value: "#0f0",
  },
  {
    position: 3,
    name: "Lithium",
    weight: 6.941,
    symbol: "Li",
    category: "diatomic nonmetal",
    appearance: "colorless gas",
    color: "blue",
    value: "#00f",
  },
  {
    position: 4,
    name: "Beryllium",
    weight: 9.0122,
    symbol: "Be",
    category: "diatomic nonmetal",
    appearance: "colorless gas",
    color: "cyan",
    value: "#0ff",
  },
  {
    position: 5,
    name: "Boron",
    weight: 10.811,
    symbol: "B",
    category: "diatomic nonmetal",
    appearance: "colorless gas",
    color: "magenta",
    value: "#f0f",
  },
  {
    position: 6,
    name: "Carbon",
    weight: 12.0107,
    symbol: "C",
    category: "diatomic nonmetal",
    appearance: "colorless gas",
    color: "yellow",
    value: "#ff0",
  },
  {
    position: 7,
    name: "Nitrogen",
    weight: 14.0067,
    symbol: "N",
    category: "diatomic nonmetal",
    appearance: "colorless gas",
    color: "black",
    value: "#000",
  },
  {
    position: 8,
    name: "Oxygen",
    weight: 15.9994,
    symbol: "O",
    category: "diatomic nonmetal",
    appearance: "colorless gas",
    color: "grey",
    value: "#033",
  },
  {
    position: 9,
    name: "Fluorine",
    weight: 18.9984,
    symbol: "F",
    category: "diatomic nonmetal",
    appearance: "colorless gas",
    color: "pink",
    value: "#177",
  },
  {
    position: 10,
    name: "Neon",
    weight: 20.1797,
    symbol: "Ne",
    category: "diatomic nonmetal",
    appearance: "colorless gas",
    color: "lightblue",
    value: "#019",
  },
];

@Component({
  selector: "app-dialog-example",
  templateUrl: "./dialog-example.component.html",
  styleUrls: ["./dialog-example.component.scss"],
})
export class DialogExampleComponent {
  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "symbol",
    "category",
    "appearance",
    "color",
    "value",
    "close",
  ];
  dataSource = ELEMENT_DATA;
}
