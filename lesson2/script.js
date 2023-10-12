let money = +prompt("Your budget for the month?", 0),
  time = prompt("Enter the date in the format YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};


for (let i = 0; i < 2; i++) {
  let a = prompt("Enter a mandatory expense item for this month", ""),
    b = prompt("How much will it cost?", "");

  if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
  && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
  } else {
    alert("Incorrect input!");
    i--;
  }
}

// let i = 0;
// while (i < 2) {
//   let a = prompt("Enter a mandatory expense item for this month", ""),
//     b = prompt("How much will it cost?", "");

//   if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
//   && a != '' && b != '' && a.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;
//   } else {
//     alert("Incorrect input!");
//     i--;
//   }
//   i++;
// }

// i = 0;
// do {
//   let a = prompt("Enter a mandatory expense item for this month", ""),
//     b = prompt("How much will it cost?", "");

//   if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
//   && a != '' && b != '' && a.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;
//   } else {
//     alert("Incorrect input!");
//     i--;
//   }
//   i++
// } while (i < 2)

appData.moneyPerDay = appData.budget / 30;

alert("Budget for the day: " + appData.moneyPerDay);

if (appData.moneyPerDay <= 100) {
  console.log("Low");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
  console.log("Middle"); 
} else if (appData.moneyPerDay > 2000) {
  console.log("High");
} else {
  console.log("Error");
}