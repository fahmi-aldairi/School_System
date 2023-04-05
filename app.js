//// Task-1

// let studentInfo = document.getElementById("Student-Info");
// let submittedInfo = document.getElementById("Submit-Info");

// studentInfo.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let stuName = event.target.Sname.value;
//   let date = event.target.DOF.value;
//   let male = event.target.Male.checked;
//   let female = event.target.Female.checked;
//   let phone = event.target.pn.value;
//   let grade = event.target.Grade.value;
//   inputForm.reset();
//   if (male == true) {
//     if (female == true) {
//       male = "undifined";
//     } else {
//       male = "male";
//     }
//   } else {
//     male = "female";
//   }
//   updated(stuName, date, male, phone, grade);
//   // console.log(stuName, date, male, phone, grade);
// });

// function updated(stuName, date, male, phone, grade) {
//   let row = document.createElement("tr");
//   let pstuName = document.createElement("td");
//   let pdate = document.createElement("td");
//   let pgender = document.createElement("td");
//   let pphone = document.createElement("td");
//   let pgrade = document.createElement("td");

//   pstuName.textContent = stuName;
//   pdate.textContent = date;
//   pgender.textContent = male;
//   pphone.textContent = phone;
//   pgrade.textContent = grade;

//   row.appendChild(pstuName);
//   row.appendChild(pdate);
//   row.appendChild(pgender);
//   row.appendChild(pphone);
//   row.appendChild(pgrade);

//   submittedInfo.appendChild(row);
// }

/////////////////////////////////

// let studentInfo = document.getElementById("Student-Info");
// let submittedInfo = document.getElementById("Submit-Info");

// studentInfo.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let stuName = event.target.Sname.value;
//   let date = event.target.DOF.value;
//   let male = event.target.Male.checked;
//   let female = event.target.Female.checked;
//   let major = event.target.Major.value;
//   let imG = event.target.img.value;
//   let phone = event.target.pn.value;
//   inputForm.reset();
//   if (male == true) {
//     if (female == true) {
//       male = "undifined";
//     } else {
//       male = "male";
//     }
//   } else {
//     male = "female";
//   }
//   // console.log(stuName, date, male, major, imG, phone);
//   updated(stuName, date, male, major, imG, phone);
// });

// function updated(stuName, date, male, major, imG, phone) {
//   let cardDiv = document.createElement("div");
//   let cardImag = document.createElement("img");
//   let cardBody = document.createElement("div");
//   let cardTitle = document.createElement("h3");
//   let cardUl = document.createElement("ul");
//   let cardLiDate = document.createElement("li");
//   let cardLiGender = document.createElement("li");
//   let cardLiMajor = document.createElement("li");
//   let cardLiPhone = document.createElement("li");

//   cardTitle.textContent = `SN: ${stuName}`;
//   cardLiDate.textContent = `Date: ${date}`;
//   cardLiGender.textContent = `Gender: ${male}`;
//   cardLiMajor.textContent = `Major: ${major}`;
//   cardImag.src = imG;
//   cardLiPhone.textContent = `PN: ${phone}`;

//   cardDiv.className = "card me-5";
//   cardImag.className = "card-img-top";
//   cardBody.className = "card-body";
//   cardTitle.className = "card-text";
//   cardUl.className = "list-group";
//   cardLiDate.className = "list-group-item";
//   cardLiGender.className = "list-group-item";
//   cardLiMajor.className = "list-group-item";
//   cardLiPhone.className = "list-group-item";

//   cardUl.appendChild(cardLiDate);
//   cardUl.appendChild(cardLiGender);
//   cardUl.appendChild(cardLiMajor);
//   cardUl.appendChild(cardLiPhone);

//   cardBody.appendChild(cardTitle);
//   cardBody.appendChild(cardUl);

//   cardDiv.appendChild(cardImag);
//   cardDiv.appendChild(cardBody);

//   submittedInfo.appendChild(cardDiv);
// }

///////////////////////////////////////

//// Task-2

let studentInfo = document.getElementById("Student-Info");
let submittedInfo = document.getElementById("Submit-Info");
let stuName, date, male, female, major, imG, phone;

let stData = [];
if (localStorage.getItem("stData") !== null) {
  stData = JSON.parse(localStorage.getItem("stData"));
  updated();
}

studentInfo.addEventListener("submit", (event) => {
  event.preventDefault();
  stuName = event.target.Sname.value;
  date = event.target.DOF.value;
  male = event.target.Male.checked;
  female = event.target.Female.checked;
  major = event.target.Major.value;
  imG = event.target.img.value;
  phone = event.target.pn.value;
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

  // console.log(stuName, date, male, major, imG, phone);
  let studentData = new stu(stuName, date, male, major, imG, phone);
  stData.push(studentData);
  localStorage.setItem("stData", JSON.stringify(stData));
  updated();
});

function stu(stuName, date, male, major, imG, phone) {
  this.stuName = stuName;
  this.date = date;
  this.male = male;
  this.major = major;
  this.imG = imG;
  this.phone = phone;
}

function updated() {
  submittedInfo.textContent = "";
  for (i = 0; i < stData.length; i++) {
    let cardDiv = document.createElement("div");
    let cardImag = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h3");
    let cardUl = document.createElement("ul");
    let cardLiDate = document.createElement("li");
    let cardLiGender = document.createElement("li");
    let cardLiMajor = document.createElement("li");
    let cardLiPhone = document.createElement("li");

    cardTitle.textContent = `SN: ${stData[i].stuName}`;
    cardLiDate.textContent = ` Date: ${stData[i].date}`;
    cardLiGender.textContent = ` Gender: ${stData[i].male}`;
    cardLiMajor.textContent = `Major: ${stData[i].major}`;
    cardImag.src = `${stData[i].imG}`;
    cardLiPhone.textContent = `PN: ${stData[i].phone}`;

    cardDiv.className = "card me-5";
    cardImag.className = "card-img-top";
    cardBody.className = "card-body";
    cardTitle.className = "card-text";
    cardUl.className = "list-group";
    cardLiDate.className = "list-group-item";
    cardLiGender.className = "list-group-item";
    cardLiMajor.className = "list-group-item";
    cardLiPhone.className = "list-group-item";

    cardUl.appendChild(cardLiDate);
    cardUl.appendChild(cardLiGender);
    cardUl.appendChild(cardLiMajor);
    cardUl.appendChild(cardLiPhone);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardUl);

    cardDiv.appendChild(cardImag);
    cardDiv.appendChild(cardBody);

    submittedInfo.appendChild(cardDiv);
  }
}

///////////////////////////////////////
