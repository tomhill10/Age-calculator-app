//let dday = document.getElementById("day");
//let mmonth = document.getElementById("month");
//let yyear = document.getElementById("year");

//function calculateAge() {
//let dayborn = document.getElementById("day").value;
//console.log(dayborn);
//}

function validateDate() {
  // Split the date into day, month, and year values
  let day = document.getElementById("day");
  let month = document.getElementById("month");
  let year = document.getElementById("year");

  // Check if the month is valid
  if (month < 1 || month > 12) {
    return false;
  }

  // Check if the day is valid
  var daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    return false;
  }

  // Check if the year is valid
  if (year < 1000 || year > 9999) {
    return false;
  }

  // If all checks pass, the date is valid
  return true;
}
console.log(validateDate());

let inputBorder = document.getElementsByTagName("input");

if (validateDate() === false) {
  for (let i = 0; i < inputBorder.length; i++) {
    inputBorder[i].style.border = "1px solid red";
    inputBorder[i].style.fontSize = "50px";
  }
}

let button = document.getElementsByTagName("button");

button.addEventListener("click", function () {
  if (validateDate() === false) {
    for (let i = 0; i < inputBorder.length; i++) {
      inputBorder[i].style.border = "1px solid red";
      inputBorder[i].style.fontSize = "50px";
    }
  }
});
