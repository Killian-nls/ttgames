const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, imgUrl } = req.body;
    const db = req.app.get('db');
    const stmt = db.prepare("INSERT INTO games (name, imgUrl) VALUES (?, ?)");
        stmt.run(name, imgUrl, (err) => {
            if (err) {
                res.status(500).send(`Error inserting game: ${err.message}`);
            } else {
                res.status(200).send({ message: 'Game added successfully' });
            }
        });
        stmt.finalize();
});

module.exports = router;