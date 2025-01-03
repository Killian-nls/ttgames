const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const registerRoute = require('./routes/auth/register');
const loginRoute = require('./routes/auth/login');
const addGameRoute = require('./routes/games/addGame');
const getGamesRoute = require('./routes/games/getGames');
const debugGetUsersRoute = require('./routes/debug/debugGetUsers');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const db = new sqlite3.Database(':memory:');

const sqlFilePath = path.join(__dirname, 'tables.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');

db.serialize(() => {
    db.exec(sql, (err) => {
        if (err) {
            console.error('Error executing SQL script:', err.message);
        } else {
            console.log('Database initialized successfully');
        }
    });
});

app.set('db', db);

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/addGame', addGameRoute);
app.use('/getGames', getGamesRoute);


app.use('/debugGetUsers', debugGetUsersRoute);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});