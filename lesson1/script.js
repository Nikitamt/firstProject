let money = prompt("Your budget for the month?", 0), 
time = prompt("Enter the date in the format YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let ans1 = prompt("Enter a mandatory expense item for this month", ""),
ans2 = prompt("How much will it cost?", ""),
ans3 = prompt("Enter a mandatory expense item for this month", ""),
ans4 = prompt("How much will it cost?", "");

appData.expenses.ans1 = ans2;
appData.expenses.ans3 = ans4;

// alert((appData.budget - appData.expenses.ans1 - appData.expenses.ans3) / 30);
alert(appData.budget / 30);