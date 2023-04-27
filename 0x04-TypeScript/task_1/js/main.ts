// Defines attribute type for Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attrName: string]: any;
}

// child of Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define type for function args and return type
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Declare function using interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]} . ${lastName}`;
};

// Describe class methods and return types with interface
interface studentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Define types for student class constructor
interface studentClassConstructor {
  new (firstName: string, lastName: string): studentClassInterface;
}

// define student class to implement interface
const StudentClass: studentClassConstructor = class StudentClass
  implements studentClassInterface
{
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};

export { printTeacher, StudentClass };
