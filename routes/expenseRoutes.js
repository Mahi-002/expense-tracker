const express = require('express');
const expenseController = require('../controllers/expensecontroller');

const router = express.Router();

// Route to add an expense
router.post('/add-expense', expenseController.addExpense);

// Route to get all expenses
router.get('/expenses', expenseController.getExpenses);

// Route to delete an expense by ID
router.delete('/expenses/:id', expenseController.deleteExpense);

module.exports = router;
