const express = require('express');

const app = express.Router();
const repository = require('../repository/QueueItemRepository');

app.get('/', async (req, res) => {
    const alias = req.query.alias;
    const items = await repository.findByQueueAlias(alias);
    res.json(items);
});

app.post('/queue', async (req, res) => {
    
});

app.post('/dequeue', async (req, res) => {
    
});

module.exports = app;