// ==========================================
// SpendWise Interactive JavaScript
// ==========================================

// ==========================================
// 1. Application Data
// ==========================================

// Store the user's budget
let monthlyBudget = 0;

// Array containing multiple expense records
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

// ==========================================
// 2. Select HTML Elements
// ==========================================

const budgetForm = document.getElementById("budgetForm");
const budgetInput = document.getElementById("budgetInput");

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const budgetDisplay = document.getElementById("budgetDisplay");
const expenseDisplay = document.getElementById("expenseDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");
const budgetMessage = document.getElementById("budgetMessage");

const expenseTableBody = document.getElementById("expenseTableBody");
const emptyMessage = document.getElementById("emptyMessage");

// ==========================================
// 3. Calculate Total Expenses
// ==========================================

function calculateTotalExpenses() {

```
let total = 0;

// Loop through every expense in the array
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}

return total;
```

}

// ==========================================
// 4. Calculate Remaining Balance
// ==========================================

function calculateRemainingBalance() {

```
const totalExpenses = calculateTotalExpenses();

return monthlyBudget - totalExpenses;
```

}

// ==========================================
// 5. Display Expenses in the Table
// ==========================================

function displayExpenses() {

```
// Clear the current table
expenseTableBody.innerHTML = "";

// Check if there are no expenses
if (expenses.length === 0) {
    emptyMessage.textContent = "No expenses added yet.";
    return;
}

emptyMessage.textContent = "";

// Loop through the expenses array
for (let i = 0; i < expenses.length; i++) {

    const expense = expenses[i];

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${expense.name}</td>
        <td>KSh ${expense.amount.toLocaleString()}</td>
        <td>${expense.category}</td>
    `;

    expenseTableBody.appendChild(row);
}
```

}

// ==========================================
// 6. Update Category Totals
// ==========================================

function updateCategoryTotals() {

```
// Create category totals
let categoryTotals = {
    Food: 0,
    Transport: 0,
    Rent: 0,
    Entertainment: 0,
    Utilities: 0
};

// Loop through every expense
for (let i = 0; i < expenses.length; i++) {

    const expense = expenses[i];

    // Check whether the category exists
    if (categoryTotals[expense.category] !== undefined) {
        categoryTotals[expense.category] += expense.amount;
    }
}

// Update the dashboard cards
document.getElementById("foodTotal").textContent =
    "KSh " + categoryTotals.Food.toLocaleString();

document.getElementById("transportTotal").textContent =
    "KSh " + categoryTotals.Transport.toLocaleString();

document.getElementById("rentTotal").textContent =
    "KSh " + categoryTotals.Rent.toLocaleString();

document.getElementById("entertainmentTotal").textContent =
    "KSh " + categoryTotals.Entertainment.toLocaleString();

document.getElementById("utilitiesTotal").textContent =
    "KSh " + categoryTotals.Utilities.toLocaleString();
```

}

// ==========================================
// 7. Update Budget Information
// ==========================================

function updateBudgetDisplay() {

```
const totalExpenses = calculateTotalExpenses();
const remainingBalance = calculateRemainingBalance();

// Update the DOM
budgetDisplay.textContent =
    "KSh " + monthlyBudget.toLocaleString();

expenseDisplay.textContent =
    "KSh " + totalExpenses.toLocaleString();

balanceDisplay.textContent =
    "KSh " + remainingBalance.toLocaleString();


// Remove previous message classes
budgetMessage.classList.remove(
    "success",
    "warning",
    "danger"
);


// ======================================
// Conditional Decision Making
// ======================================

if (monthlyBudget === 0) {

    budgetMessage.textContent =
        "Please enter a monthly budget.";

} else if (remainingBalance < 0) {

    budgetMessage.textContent =
        "Warning: You have exceeded your budget.";

    budgetMessage.classList.add("danger");

} else if (remainingBalance <= monthlyBudget * 0.2) {

    budgetMessage.textContent =
        "Be careful: your remaining balance is getting low.";

    budgetMessage.classList.add("warning");

} else {

    budgetMessage.textContent =
        "Good job! You are within your budget.";

    budgetMessage.classList.add("success");
}
```

}

// ==========================================
// 8. Budget Form Event
// ==========================================

budgetForm.addEventListener("submit", function(event) {

```
// Prevent page refresh
event.preventDefault();

const enteredBudget = Number(budgetInput.value);

// Validate user input
if (enteredBudget <= 0 || isNaN(enteredBudget)) {

    budgetMessage.textContent =
        "Please enter a valid budget greater than zero.";

    budgetMessage.classList.remove(
        "success",
        "warning"
    );

    budgetMessage.classList.add("danger");

    return;
}

// Store the user's budget
monthlyBudget = enteredBudget;

// Update the dashboard
updateBudgetDisplay();
```

});

// ==========================================
// 9. Expense Form Event
// ==========================================

expenseForm.addEventListener("submit", function(event) {

```
// Prevent page refresh
event.preventDefault();

const name = expenseName.value.trim();
const amount = Number(expenseAmount.value);
const category = expenseCategory.value;


// Validate expense information
if (name === "") {

    alert("Please enter an expense name.");
    return;
}

if (amount <= 0 || isNaN(amount)) {

    alert("Please enter a valid expense amount.");
    return;
}

if (category === "") {

    alert("Please select an expense category.");
    return;
}


// Add the new expense to the array
expenses.push({
    name: name,
    amount: amount,
    category: category
});


// Update the webpage
displayExpenses();
updateCategoryTotals();
updateBudgetDisplay();


// Clear the form
expenseForm.reset();
```

});

// ==========================================
// 10. Initial Display
// ==========================================

displayExpenses();
updateCategoryTotals();
updateBudgetDisplay();

// ==========================================
// 11. Profile Button Event
// ==========================================

const profileButton = document.getElementById("profileButton");

profileButton.addEventListener("click", function() {

```
alert("Welcome to your SpendWise Dashboard!");
```

});
