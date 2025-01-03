const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { username, email, password } = req.body;
    const db = req.app.get('db');
    db.get("SELECT * FROM users WHERE username = ? OR email = ?", [username, email], (err, row) => {
        if (err) {
            return res.status(500).send(`Error querying database: ${err.message}`);
        }
        if (row) {
            return res.status(400).send({ message: 'Username or email already exists' });
        }
        const stmt = db.prepare("INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, 'user')");
        stmt.run(username, email, password, (err) => {
            if (err) {
                res.status(500).send(`Error inserting user: ${err.message}`);
            } else {
                res.status(200).send({ message: 'User registered successfully', username: username });
            }
        });
        stmt.finalize();
    });
});

module.exports = router;