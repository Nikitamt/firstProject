let money, time;

function start() {
  money = +prompt("Your budget for the month?", "");
  time = prompt("Enter the date in the format YYYY-MM-DD", "");

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Your budget for the month?", "");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};


function chooseExpenses() {
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
}
chooseExpenses();

function chooseOptExpenses() {
  for(let i = 1; i < 4; i++) {
    appData.optionalExpenses[i] = prompt("An item of optional expenses?", '');
  }
}
chooseOptExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Budget for the day: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay <= 100) {
    console.log("Low");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
    console.log("Middle");
  } else if (appData.moneyPerDay > 2000) {
    console.log("High");
  } else {
    console.log("Error");
  }
}
detectLevel();

function checkSaving() {
  if (appData.savings) {
    let save = +prompt("What is amount of saving?", ''),
      percent = +prompt("At what percentage?", '');

    appData.monthIncome = save / 100 / 12 * percent;
    alert("Monthly income from your deposit " + appData.monthIncome);
  }
}
checkSaving();