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
  savings: true,
  chooseExpenses: function() {
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
  },
  chooseOptExpenses: function() {
    for (let i = 1; i < 4; i++) {
      appData.optionalExpenses[i] = prompt("An item of optional expenses?", '');
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Budget for the day: " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay <= 100) {
      console.log("Low");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
      console.log("Middle");
    } else if (appData.moneyPerDay > 2000) {
      console.log("High");
    } else {
      console.log("Error");
    }
  },
  checkSaving: function() {
    if (appData.savings) {
    let save = +prompt("What is amount of saving?", ''),
      percent = +prompt("At what percentage?", '');

    appData.monthIncome = save / 100 / 12 * percent;
    alert("Monthly income from your deposit " + appData.monthIncome);
    }
  },
  chooseIncome: function() {
    let items = prompt("What will bring additional income? (List them separated by commas)", "");
    while (items == '' || typeof(items) == null || typeof(items) != 'string'){
      items = prompt("What will bring additional income? (List them separated by commas)", "");
    }
    appData.income = items.split(", ");
    appData.income.push(prompt("Maybe anything?", ""));
    appData.income.sort();

    appData.income.forEach((element, index) => {
      alert("Способы доп. заработка " + (index + 1) + " - " + element);
    });
  }
};

console.log("Наша программа включает в себя: ");
for (let key in appData) {
  console.log("Наша программа включает в себя " + key + " - " + appData[key]);
}

