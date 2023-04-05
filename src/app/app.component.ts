import { Component, OnInit } from "@angular/core";
import { Person } from "../domain/person";
import { PersonService } from "src/service/personService";

let person1 = new Person("Andrea", "Pontillo", new Date(1997, 4, 17, 12, 30, 0, 0));
let person2 = new Person("John", "Doe", new Date(1950, 7, 10, 22, 30, 0, 0));
let person3 = new Person("Mike", "Ross", new Date(1988, 6, 18, 16, 22, 0, 0));

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [PersonService],
})
export class AppComponent implements OnInit {
  constructor(private personService: PersonService) {}
  title = "formazione-angular";

  ngOnInit(): void {
    PrintAge(person1, this.personService.getPersonAge(person1));
    PrintAge(person2, this.personService.getPersonAge(person2));
    PrintAge(person3, this.personService.getPersonAge(person3));

    printHoursLived(person1, this.personService.getPersonLivedHours(person1));
    printHoursLived(person2, this.personService.getPersonLivedHours(person2));
    printHoursLived(person3, this.personService.getPersonLivedHours(person3));

    PrintMinutesLived(person1, this.personService.getPersonLivedMinutes(person1));
    PrintMinutesLived(person2, this.personService.getPersonLivedMinutes(person2));
    PrintMinutesLived(person3, this.personService.getPersonLivedMinutes(person3));
  }
}

function PrintAge(person: Person, age: number) {
  console.log(
    `${person.firstname} ${
      person.lastname
    } is born in ${person.birthday.toDateString()} and is ${age} years old`
  );
}
function printHoursLived(person: Person, hours: number) {
  console.log(`${person.firstname} ${person.lastname} has lived ${hours} hours`);
}

function PrintMinutesLived(person: Person, minutes: number) {
  console.log(`${person.firstname} ${person.lastname} has lived ${minutes} minutes`);
}
