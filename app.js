const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenseRoutes');

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));

// Routes
app.use(expenseRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
