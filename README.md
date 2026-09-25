# SpendWise Dashboard

SpendWise is an interactive personal budgeting application that helps users manage their monthly budget and expenses.

The project started as a static HTML and CSS dashboard. This week, JavaScript was added to make SpendWise interactive and able to process user data.

## Project Files

* `index.html` - Contains the structure of the SpendWise application.
* `style.css` - Contains the layout, styling, responsive design, Grid, and Flexbox.
* `script.js` - Contains the application logic, arrays, loops, conditionals, DOM manipulation, and event listeners.
* `README.md` - Contains information about the project and the concepts implemented.

## Improvements Made This Week

The following improvements were made to SpendWise:

* Added an interactive budget form.
* Added an interactive expense form.
* Added an expense array to store multiple records.
* Added loops to process expense records.
* Added conditional statements for budget decisions.
* Added DOM manipulation to update the webpage.
* Added event listeners for user interactions.
* Added dynamic expense records to the table.
* Added dynamic category totals.
* Added remaining balance calculations.
* Added budget warnings and feedback messages.

## 1. Conditional Statements

Conditional statements are used to make decisions based on the user's budget information.

For example, SpendWise checks whether the user has exceeded their budget:

```javascript
if (remainingBalance < 0) {
    budgetMessage.textContent =
        "Warning: You have exceeded your budget.";
}
```

The application also checks whether the remaining balance is becoming low:

```javascript
else if (remainingBalance <= monthlyBudget * 0.2) {
    budgetMessage.textContent =
        "Be careful: your remaining balance is getting low.";
}
```

If the user is still within a comfortable budget range, the application displays a positive message.

## 2. Arrays

An array is used to store multiple expense records.

```javascript
let expenses = [
    {
        name: "Lunch",
        amount: 500,
        category: "Food"
    },
    {
        name: "Bus Fare",
        amount: 300,
        category: "Transport"
    },
    {
        name: "Electricity",
        amount: 1500,
        category: "Utilities"
    }
];
```

This allows SpendWise to manage many expenses instead of creating a separate variable for every expense.

New expenses are added to the array using `push()`:

```javascript
expenses.push({
    name: name,
    amount: amount,
    category: category
});
```

## 3. Loops

A `for` loop is used to process all expense records.

```javascript
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}
```

The loop goes through every expense and adds its amount to calculate the total expenses.

Loops are also used when displaying expense records on the webpage.

## 4. DOM Manipulation

DOM manipulation allows JavaScript to change the webpage dynamically.

SpendWise selects HTML elements using `getElementById()`:

```javascript
const budgetDisplay =
    document.getElementById("budgetDisplay");
```

The application then changes the content using `textContent`:

```javascript
budgetDisplay.textContent =
    "KSh " + monthlyBudget.toLocaleString();
```

JavaScript also creates table rows dynamically:

```javascript
const row = document.createElement("tr");
```

The new row is then added to the webpage:

```javascript
expenseTableBody.appendChild(row);
```

This means the user can add an expense and immediately see it appear on the dashboard.

## 5. Event Listeners

Event listeners allow SpendWise to respond to user actions.

The budget form listens for a submit event:

```javascript
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

The expense form also listens for submissions:

```javascript
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

The Profile button listens for a click:

```javascript
profileButton.addEventListener("click", function() {
    alert("Welcome to your SpendWise Dashboard!");
});
```

These events connect user actions to JavaScript logic.

## 6. Calculations

SpendWise calculates total expenses by looping through the expenses array:

```javascript
function calculateTotalExpenses() {

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}
```

The remaining balance is calculated by subtracting total expenses from the monthly budget:

```javascript
function calculateRemainingBalance() {
    const totalExpenses = calculateTotalExpenses();

    return monthlyBudget - totalExpenses;
}
```

## 7. User Interaction Flow

The application follows this process:

```text
User enters budget
        ↓
JavaScript stores the budget
        ↓
User adds an expense
        ↓
Expense is stored in the array
        ↓
JavaScript processes the expense records
        ↓
Total expenses are calculated
        ↓
Remaining balance is calculated
        ↓
DOM is updated
        ↓
User sees the new information on the dashboard
```

## 8. Challenges and Solutions

### Challenge 1: Managing Multiple Expenses

Using separate variables for every expense would make the application difficult to manage.

**Solution:** An array was used to store multiple expense objects.

### Challenge 2: Updating the Page

The original SpendWise project mainly displayed static information.

**Solution:** DOM manipulation was added so JavaScript can update the dashboard whenever the user adds or changes information.

### Challenge 3: Handling Invalid Input

Users might enter an invalid budget or expense amount.

**Solution:** Conditional statements validate the input before it is processed.

### Challenge 4: Keeping Calculations Updated

Adding a new expense changes the total expenses and remaining balance.

**Solution:** Functions are called again after each new expense so the dashboard stays updated.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Arrays
* Loops
* Conditional Statements
* Event Listeners
* CSS Grid
* Flexbox
* Google Fonts

## How to Run

1. Clone or download the SpendWise project.
2. Open the project folder.
3. Make sure these files are present:

```text
index.html
style.css
script.js
README.md
```

4. Open `index.html` in a web browser.
5. Enter a monthly budget.
6. Add expenses using the expense form.
7. View the updated expense table and dashboard totals.

## Testing

The application should be tested by:

* Entering a valid budget.
* Entering an invalid budget.
* Adding multiple expenses.
* Checking different expense categories.
* Checking the remaining balance.
* Testing what happens when expenses exceed the budget.
* Testing the Profile button.
* Confirming that new expenses appear in the table.
* Confirming that category totals update correctly.

## Author

Guled Kusow
