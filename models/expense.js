const db = require('../utils/db');

class Expense {
    static addExpense(amount, description, category, callback) {
        const query = 'INSERT INTO expenses (amount, description, category) VALUES (?, ?, ?)';
        db.query(query, [amount, description, category], (err, result) => {
            if (err) {
                return callback(err);
            }
            callback(null, result);
        });
    }

    static getAllExpenses(callback) {
        const query = 'SELECT * FROM expenses';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }

    static deleteExpense(id, callback) {
        const query = 'DELETE FROM expenses WHERE id = ?';
        db.query(query, [id], (err, result) => {
            if (err) {
                return callback(err);
            }
            callback(null, result);
        });
    }
}

module.exports = Expense;
