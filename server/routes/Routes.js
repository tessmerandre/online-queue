const { json } = require('express');
const express = require('express');

const app = express.Router();
const repository = require('../repository/QueueItemRepository');

app.get('/', async (req, res) => {
    const alias = req.query.alias;
    const items = await list(alias);
    res.json(items);
});

app.post('/queue', async (req, res) => {
    const { alias, name } = req.query;

    await repository.queue(name, alias);
    const items = await list(alias)
    
    res.json(items);
});

app.post('/dequeue', async (req, res) => {
    const { alias } = req.query;

    await repository.dequeue(alias);
    const items = await list(alias);

    res.json(items);
});

list = async (alias) => {
    const items = await repository.findByQueueAlias(alias);
    return items.map(e => map(e))
}

map = (object) => {
    return {
        id: object._id,
        name: object.name,
        alias: object.alias,
        consumed: object.consumed,
        createdAt: object.createdAt
    }
}

module.exports = app;