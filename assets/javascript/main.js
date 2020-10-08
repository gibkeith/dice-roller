let RollButton = document.querySelector("#roll");
let numberOfDiceInput = document.querySelector("#number");
let ShowAllRolls = document.querySelector("#show-all");
let Total = document.querySelector("#total-points");
let allRolls = document.querySelector("#list");
let diceRollsArray = [];
let RESET = document.querySelector("#reset");

function numberRolled() {
  return Math.floor(Math.random() * 6) + 1;
}

RollButton.addEventListener("click", function () {
  let number = Number(numberOfDiceInput.value);
  console.log(number);
  let count = 1;

  while (count <= number) {
    diceRollsArray.push(numberRolled());
    console.log(count);
    count++;
    var sum = diceRollsArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    Total.innerHTML = sum;
  }

  console.log(diceRollsArray);
});

ShowAllRolls.addEventListener("click", function () {
  let count = 0;
  allRolls.innerHTML = "";

  while (count < diceRollsArray.length) {
    allRolls.innerHTML += "<li>" + diceRollsArray[count] + "</li>";
    count++;
  }
});

RESET.addEventListener("click", function () {
  window.location.reload(true);
});
