const express = require('express');

const app = express.Router();
const repository = require('../repository/QueueItemRepository');

// get all todo items in the db
app.get('/', async (req, res) => {
    console.log(req);
    res.send("oie");
});

app.post('/queue', async (req, res) => {
    
});

app.post('/dequeue', async (req, res) => {
    
});

module.exports = app;