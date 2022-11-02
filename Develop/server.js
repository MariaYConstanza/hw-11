const express = require('express');
const path = ('path');
const noteData = require ('./db/db.json');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();


// app express functions for port
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

// set up express app and data parsing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// terminal link 
app.listen(PORT, () => {
    console.log(`Your app listening at http://localhost:${PORT} check it out!`);
});
