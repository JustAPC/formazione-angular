import { Component, OnInit } from "@angular/core";
import { Person } from "src/domain/person";
import { PeriodicElement } from "src/domain/element";
import { MockService } from "src/services/mockService";

let person = new Person();
let element = new PeriodicElement();

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [MockService],
})
export class AppComponent implements OnInit {
  title = "formazione-angular";

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    console.log(`Person object before changes: ${JSON.stringify(person, null, 4)}`);
    console.log(`Periodic Element object before changes: ${JSON.stringify(element, null, 4)}`);

    this.mockService.AddToObjectsArray([person, element], ["createdBy", "Andrea Pontillo"]);

    console.log(`Person object after changes: ${JSON.stringify(person, null, 4)}`);
    console.log(`Periodic Element object after changes: ${JSON.stringify(element, null, 4)}`);
  }
}
