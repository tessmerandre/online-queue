const QueueItem = require('../models/QueueItem');

class QueueItemRepository {

    constructor(model) {
        this.model = model;
    }

    async queue(name, alias) {
        return await this.model.create({ name: name, alias: alias, consumed: false });
    }

    async dequeue(alias) {
        return this.findByQueueAlias(alias);
    }

    async findByQueueAlias(alias) {
        return await this.model.find({
            alias: alias,
            consumed: false
        })
        .sort({ createdAt: 1 })
        .exec();
    }

}

module.exports = new QueueItemRepository(QueueItem)