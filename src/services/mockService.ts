import { PeriodicElement } from "src/domain/element";
import { Person } from "src/domain/person";

export class MockService {
  AddToObjectsArray(objects: [Object, Object], strings: [string, string]) {
    let property = strings[0];
    let value = strings[1];

    objects.forEach((object) => {
      (object as any)[property] = value;
    });
  }
}
