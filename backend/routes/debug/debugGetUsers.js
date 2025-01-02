const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const db = req.app.get('db');
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) {
            res.status(500).send("Error getting users");
        } else {
            res.status(200).send(rows);
        }
    });
});

module.exports = router;