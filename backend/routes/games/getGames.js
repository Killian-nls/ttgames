const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const db = req.app.get('db');
    db.all("SELECT * FROM games", async (err, rows) => {
        if (err) {
            return res.status(500).send({ message: 'Internal server error' });
        }
        if (rows.length > 0) {
            return res.status(200).send({ games: rows });
        } else {
            return res.status(400).send({ message: 'No games found' });
        }
    });
});

module.exports = router;