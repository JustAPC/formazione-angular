import { Person } from "src/domain/person";

export class PersonService {
  getPersonAge(person: Person) {
    var month_diff = Date.now() - person.birthday.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  }

  getPersonLivedHours(person: Person) {
    return Math.round(this.getPersonLivedMinutes(person) / 3600000);
  }

  getPersonLivedMinutes(person: Person) {
    var today = new Date();
    return Math.round(today.getTime() - person.birthday.getTime());
  }
}
