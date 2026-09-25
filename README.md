# SpendWise Dashboard

SpendWise is a personal finance dashboard designed to help users understand their monthly budget, expenses, savings, and remaining balance.

The project was initially created using HTML and CSS. JavaScript has now been added to make the application process budgeting information and perform calculations.

## Project Files

* `index.html` - Contains the structure of the SpendWise dashboard.
* `style.css` - Contains the styling, layout, CSS Grid, Flexbox, colors, typography, and responsive design.
* `script.js` - Contains the JavaScript variables, user input, calculations, and reusable functions.
* `README.md` - Contains information about the project and the JavaScript concepts used.

## What SpendWise Does

SpendWise provides a dashboard showing different financial categories:

* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities

The JavaScript part of the application allows the user to enter a monthly budget and calculates the total expenses and remaining balance.

## JavaScript Concepts Implemented

The following JavaScript concepts were implemented:

* Variables
* Data types
* User input
* Number conversion
* Arithmetic calculations
* Functions
* Function parameters
* Return values
* Conditional statements
* Console output

## Variables

Variables are used to store important budgeting and expense information.

For example:

```javascript
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;
```

Expense values are also stored in variables:

```javascript
let foodExpense = 8500;
let transportExpense = 4200;
let rentExpense = 15000;
let entertainmentExpense = 3000;
let utilitiesExpense = 2800;
```

These variables allow the program to store and process financial information.

## Data Types

The project uses different JavaScript data types.

Numbers are used for financial values:

```javascript
let foodExpense = 8500;
```

Strings are used when displaying messages:

```javascript
console.log("Monthly Budget: KSh " + monthlyBudget);
```

Boolean values are also indirectly used through conditions such as:

```javascript
if (monthlyBudget > 0) {
    runBudgetCalculation();
}
```

## Collecting User Input

The application uses the JavaScript `prompt()` function to collect the user's monthly budget.

```javascript
let userInput = prompt(
    "Enter your monthly budget in KSh:"
);
```

The value entered by the user is initially received as text.

The `Number()` function converts the input into a number:

```javascript
monthlyBudget = Number(userInput);
```

This allows the value to be used in mathematical calculations.

## Budget Calculations

The application calculates the total expenses using an addition operation.

```javascript
totalExpenses =
    foodExpense +
    transportExpense +
    rentExpense +
    entertainmentExpense +
    utilitiesExpense;
```

The remaining balance is calculated by subtracting total expenses from the monthly budget:

```javascript
remainingBalance = monthlyBudget - totalExpenses;
```

For example:

```text
Remaining Balance = Monthly Budget - Total Expenses
```

## Functions

Functions are used to organize the JavaScript code into reusable sections.

The project includes a function for calculating total expenses:

```javascript
function calculateTotalExpenses() {
    totalExpenses =
        foodExpense +
        transportExpense +
        rentExpense +
        entertainmentExpense +
        utilitiesExpense;

    return totalExpenses;
}
```

There is also a function for calculating the remaining balance:

```javascript
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}
```

The function accepts two parameters:

* `budget`
* `expenses`

It then subtracts the expenses from the budget and returns the result.

## User Input Function

The `getUserBudget()` function is responsible for collecting and validating the user's budget.

```javascript
function getUserBudget() {
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
}
```

This keeps the user-input logic separate from the calculation logic.

## Displaying Results

The calculated results are displayed in the browser console using `console.log()`.

The application displays:

* Monthly budget
* Total expenses
* Remaining balance
* Savings

Example:

```javascript
console.log("Monthly Budget: KSh " + monthlyBudget);
console.log("Total Expenses: KSh " + totalExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);
```

To view the results:

1. Open `index.html` in a browser.
2. Enter your monthly budget when the prompt appears.
3. Right-click the page.
4. Select **Inspect**.
5. Open the **Console** tab.
6. View the SpendWise budget report.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox
* Google Fonts

## How to Run

1. Open the SpendWise project folder.
2. Make sure these files are present:

   * `index.html`
   * `style.css`
   * `script.js`
   * `README.md`
3. Open `index.html` in a web browser.
4. Enter your monthly budget when prompted.
5. Open the browser console to view the calculated results.

## Testing

The application should be tested with different budget values to make sure the calculations work correctly.

For example:

```text
Monthly Budget: KSh 50000
Total Expenses: KSh 33500
Remaining Balance: KSh 16500
```

## Author

Guled Kusow

