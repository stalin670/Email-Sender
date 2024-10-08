require('dotenv').config();

const express = require('express');
const appRoute = require('./routes/route.js');

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json());

// Routes
app.use('/api', appRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`)
});