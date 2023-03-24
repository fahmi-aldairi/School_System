let studentInfo = document.getElementById("Student-Info");
let submittedInfo = document.getElementById("Submit-Info");

studentInfo.addEventListener("submit", (event) => {
  event.preventDefault();

  let stuName = event.target.Sname.value;
  let date = event.target.DOF.value;
  let male = event.target.Male.checked;
  let female = event.target.Female.checked;
  let phone = event.target.pn.value;
  let grade = event.target.Grade.value;
  inputForm.reset();
  if (male == true) {
    if (female == true) {
      male = "undifined";
    } else {
      male = "male";
    }
  } else {
    male = "female";
  }
  updated(stuName, date, male, phone, grade);
  // console.log(stuName, date, male, phone, grade);
});

function updated(stuName, date, male, phone, grade) {
  let row = document.createElement("tr");
  let pstuName = document.createElement("td");
  let pdate = document.createElement("td");
  let pgender = document.createElement("td");
  let pphone = document.createElement("td");
  let pgrade = document.createElement("td");

  pstuName.textContent = stuName;
  pdate.textContent = date;
  pgender.textContent = male;
  pphone.textContent = phone;
  pgrade.textContent = grade;

  row.appendChild(pstuName);
  row.appendChild(pdate);
  row.appendChild(pgender);
  row.appendChild(pphone);
  row.appendChild(pgrade);

  submittedInfo.appendChild(row);
}
