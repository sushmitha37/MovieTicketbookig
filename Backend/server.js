const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sushmitha17',
    database: 'Booking'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database');
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO signup_1 (`First_Name`, `Last_Name`, `Mobile_no`, `Email`, `Password`, `Confirm_Password`) VALUES (?)";
    
    const values = [
        req.body.First_Name,
        req.body.Last_Name,
        req.body.Mobile_no,
        req.body.Email,
        req.body.Password,        
        req.body.Confirm_Password  
    ];
    
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: 'Registered successfully' });
    });
});

// POST login route
app.post('/login', (req, res) => {
    const { Email, Password } = req.body;  
    console.log("Received Email:", Email);
    console.log("Received Password:", Password);

    const sql = 'SELECT * FROM signup_1 WHERE Email = ?';

    db.query(sql, [Email], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        console.log("Query results:", results);

        if (results.length === 0) {
            console.log("User not found with email:", Email);
            return res.status(401).json({ message: 'User not found', success: false });
        }

        const user = results[0];

        if (Password !== user.Password) {
            console.log("Invalid credentials for user:", Email);
            return res.status(401).json({ message: 'Invalid credentials', success: false });
        }

        console.log("Login successful for user:", Email);
        return res.status(200).json({ message: 'Login successful', success: true });
    });
});


app.listen(port, () => {
    console.log(`Running on port no ${port}`);
});

