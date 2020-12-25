const { mongo } = require('mongoose');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const queueItemSchema = new Schema({
    name: String,
    alias: String,
    consumed: Boolean,
    createdAt: 'created_at'
});

const QueueItem = mongoose.model('QueueItem', queueItemSchema); 

module.exports = QueueItem;