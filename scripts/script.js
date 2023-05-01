/*let button = document.getElementById("button-click");

button.addEventListener("click", function () {
  console.log("button clicked!");
});
*/ //To Test eventListener

function validateDate() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  if (month < 1 || month > 12) {
    return false;
  }

  var daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    return false;
  }

  if (year < 1000 || year > 2024) {
    return false;
  }

  return true;
}

button.addEventListener("click", function () {
  if (validateDate() === false) {
    let inputBorder = document.getElementsByTagName("input");
    let inputWarning = document.getElementsByClassName("day-error");
    let inputLabel = document.getElementsByTagName("label");
    for (let i = 0; i < inputBorder.length; i++) {
      inputBorder[i].style.border = "1px solid red";
    }
    for (let i = 0; i < inputWarning.length; i++) {
      inputWarning[i].style.color = "red";
    }
    for (let i = 0; i < inputLabel.length; i++) {
      inputLabel[i].style.color = "red";
    }
  }
});
