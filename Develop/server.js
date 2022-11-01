const express = require('express');
const path = ('path');
const noteData = require ('./db/db.json');

const PORT = process.env.port || 3001;

const app = express();

// app express functions for port
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

// set up express app and data parsing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/notes', (req, res) => res.json(noteData));

// terminal link 
app.listen(PORT, () => {
    console.log(`Your app listening at http://localhost:${PORT} check it out!`);
});

app.get('/api/notes', (req, res) => {
    res.json(`${req.method} request received to get notes`);
  
    console.info(`${req.method} request received to get notes`);
  });

// set up POST request and review
app.post('/api/notes', (req, res) => {
    res.json(`${req.method} request recieved to add a note`);

    console.info(`${req.method} request recieved to add a note`);
});

app.listen(PORT, () => 
console.log(`Express server listening on ${PORT}`)
);