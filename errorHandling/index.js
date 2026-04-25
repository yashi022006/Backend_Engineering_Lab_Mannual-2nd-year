const express = require("express");
const { errorHandler, logFile, checkAge } = require('./middleware/errorHandler');

const app = express();
const router = express.Router();

// Global middleware
app.use(logFile);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome");
});

// Router middleware
router.use(checkAge);

router.get('/contact', (req, res) => {
    res.send("Welcome to Contact Page");
});

app.get('/about', (req, res) => {
    res.send("Welcome About Page");
});

// Mount router
app.use('/contact', router);

// 404 handler
app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.statusCode = 404;
    next(error);
});

// Error handler
app.use(errorHandler);

// Server
app.listen(8000, () => {
    console.log("http://localhost:8000");
});