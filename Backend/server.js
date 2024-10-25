const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'susu1737@',
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
    const { email, password } = req.body;

    // Check if the user exists in the database
    const sql = 'SELECT * FROM signup_1 WHERE Email = ?';
    
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        // Check if user was found
        if (results.length === 0) {
            return res.status(401).json({ message: 'User not found' });
        }

        const user = results[0];

        // Compare input password with stored password (assuming passwords are stored as plain text)
        if (password !== user.Password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful' });
    });
});

app.listen(port, () => {
    console.log(`Running on port no ${port}`);
});
