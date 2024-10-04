const mysql = require('mysql2');

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  
    password: 'Mahi@2002',  
    database: 'expense_tracker'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Could not connect to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = db;
