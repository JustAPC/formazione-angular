interface IPerson {
  firstname: string;
  lastname: string;
  birthday: Date;
}

export class Person implements IPerson {
  public firstname: string;
  public lastname: string;
  public birthday: Date;

  public constructor(firstName: string, lastName: string, birthDay: Date) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.birthday = birthDay;
  }
}
