export class Employee {
    constructor(
      public id: number,
      public name: string,
      public age: number,
      public gender: string,
      public department: string,
      public skills: string[],
      public email: string,
      public phone: string
    ) {}
  }
  