const Expense = require('../models/expense');

// Controller to handle adding an expense
exports.addExpense = (req, res) => {
    const { amount, description, category } = req.body;
    if (!amount || !description || !category) {
        return res.status(400).send('All fields are required.');
    }

    Expense.addExpense(amount, description, category, (err, result) => {
        if (err) {
            return res.status(500).send('Failed to add expense.');
        }
        res.status(201).send('Expense added successfully');
    });
};

// Controller to handle fetching all expenses
exports.getExpenses = (req, res) => {
    Expense.getAllExpenses((err, expenses) => {
        if (err) {
            return res.status(500).send('Failed to fetch expenses.');
        }
        res.json(expenses);
    });
};

// Controller to handle deleting an expense
exports.deleteExpense = (req, res) => {
    const { id } = req.params;

    Expense.deleteExpense(id, (err, result) => {
        if (err) {
            return res.status(500).send('Failed to delete expense.');
        }
        res.status(200).send('Expense deleted successfully');
    });
};
