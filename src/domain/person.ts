interface IPerson {
  firstname: string;
  lastname: string;
  birthday: Date;
}

export class Person implements IPerson {
  public firstname: string = "Andrea";
  public lastname: string = "Pontillo";
  public birthday: Date = new Date(1997, 4, 17, 12, 30, 0, 0);

  public constructor() {}
}
