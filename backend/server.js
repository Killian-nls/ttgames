const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const registerRoute = require('./routes/auth/register');
const loginRoute = require('./routes/auth/login');
const addGameRoute = require('./routes/games/addGame');
const getGamesRoute = require('./routes/games/getGames');
const debugGetUsersRoute = require('./routes/debug/debugGetUsers');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, email TEXT, password TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS games (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imgUrl TEXT)");
    db.run("INSERT INTO games (name, imgUrl) VALUES ('Poker', 'poker.png'), ('Chess', 'chess.png'), ('Checkers', 'checkers.png')");
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