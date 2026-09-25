/*

* SpendWise - JavaScript Foundation
* Week 6 Assignment
  */

// ================================
// 1. Application Variables
// ================================

// Budget-related variables
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Expense-related data
let foodExpense = 8500;
let transportExpense = 4200;
let rentExpense = 15000;
let entertainmentExpense = 3000;
let utilitiesExpense = 2800;

// Savings
let savings = 7500;

// ================================
// 2. Calculate Total Expenses
// ================================

function calculateTotalExpenses() {
totalExpenses =
foodExpense +
transportExpense +
rentExpense +
entertainmentExpense +
utilitiesExpense;

```
return totalExpenses;
```

}

// ================================
// 3. Calculate Remaining Balance
// ================================

function calculateRemainingBalance(budget, expenses) {
return budget - expenses;
}

// ================================
// 4. Get User Budget
// ================================

function getUserBudget() {

```
let userInput = prompt(
    "Enter your monthly budget in KSh:"
);

if (userInput !== null && userInput.trim() !== "") {

    monthlyBudget = Number(userInput);

    if (!isNaN(monthlyBudget) && monthlyBudget >= 0) {
        return monthlyBudget;
    }
}

console.log("Invalid budget entered.");
return 0;
```

}

// ================================
// 5. Run Budget Calculation
// ================================

function runBudgetCalculation() {

```
calculateTotalExpenses();

remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);

console.log("========== SpendWise Budget Report ==========");
console.log("Monthly Budget: KSh " + monthlyBudget);
console.log("Total Expenses: KSh " + totalExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);
console.log("Savings: KSh " + savings);
console.log("=============================================");
```

}

// ================================
// 6. Start Application
// ================================

monthlyBudget = getUserBudget();

if (monthlyBudget > 0) {
runBudgetCalculation();
} else {
console.log("SpendWise could not calculate the budget.");
}
