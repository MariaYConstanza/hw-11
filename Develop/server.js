const express = require('express');
const path = ('path');
const noteData = require ('./db/db.json');

const PORT = process.env.port || 3001;

const app = express();

// set up express app and data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/notes', (req, res) => res.json(noteData));

app.listen(PORT, () => {
    console.log(`Your app listening at http://localhost:${PORT} check it out!`);
});

// set up POST request and review
