document.getElementById('expenseForm').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    const expense = { amount, description, category };

    // Send data to the server via POST
    fetch('/add-expense', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(expense)
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
        fetchExpenses();
    })
    .catch(err => console.error(err));

    // Clear form fields
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
}

// Fetch and display all expenses
function fetchExpenses() {
    fetch('/expenses')
    .then(response => response.json())
    .then(expenses => {
        const expenseList = document.getElementById('expenseList');
        expenseList.innerHTML = ''; // Clear existing list
        expenses.forEach(expense => {
            const li = document.createElement('li');
            li.innerHTML = `Amount: ${expense.amount}, Description: ${expense.description}, Category: ${expense.category}
            <button onclick="deleteExpense(${expense.id})">Delete</button>`;
            expenseList.appendChild(li);
        });
    });
}

// Delete an expense
function deleteExpense(id) {
    fetch(`/expenses/${id}`, { method: 'DELETE' })
    .then(response => response.text())
    .then(message => {
        alert(message);
        fetchExpenses();
    })
    .catch(err => console.error(err));
}

// Fetch expenses on page load
window.onload = fetchExpenses;
