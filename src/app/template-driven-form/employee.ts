export class Employee {
    /*
        angular automatically create propertirs and assign values to object
        in compile time
    */
    constructor(
      public name: string,
      public gender: string,
      public department: string,
      public skills: { [key: string]: boolean },
      public email: string,
      public phone: string,
      public id?: number | null,
      public age?: number | null
    ) {}
  }
  