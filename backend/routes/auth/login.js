const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/', (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get('db');
    db.get("SELECT * FROM users WHERE email = ?", [email], async (err, row) => {
        if (err) {
            return res.status(500).send({ message: 'Internal server error' });
        }
        if (row) {
            const isMatch = await bcrypt.compare(password, row.password);
            if (isMatch) {
                return res.status(200).send({ username: row.username });
            } else {
                return res.status(400).send({ message: 'Invalid credentials' });
            }
        } else {
            return res.status(400).send({ message: 'User not found' });
        }
    });
});

module.exports = router;