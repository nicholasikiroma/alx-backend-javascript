interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_one: Student = {
  firstName: "Jullian",
  lastName: "Anderson",
  age: 23,
  location: "Cyprus",
};

const student_two: Student = {
  firstName: "Michael",
  lastName: "Corrs",
  age: 25,
  location: "South Africa",
};

const studentsList: Student[] = [student_one, student_two];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

table.style.background = "pink";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid pink";
  locationCell.style.border = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);
