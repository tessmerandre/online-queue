const mongoose = require('mongoose');
const { Schema } = mongoose;

const queueItemSchema = new Schema({
    name: String,
    alias: String,
    consumed: Boolean
}, { timestamps: true });

const QueueItem = mongoose.model('QueueItem', queueItemSchema); 

module.exports = QueueItem;