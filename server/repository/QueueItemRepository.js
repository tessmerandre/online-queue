const QueueItem = require('../models/QueueItem');

class QueueItemRepository {

    constructor(model) {
        this.model = model;
    }

    async queue(name, alias) {
        const queueItem = await (new this.model({ name, alias, consumed: false }).exec());
        return queueItem;
    }

    async dequeue(alias) {
        return this.findByQueueAlias(alias);
    }

    async findByQueueAlias(alias) {
        return await this.model.find({
            alias: alias,
            consumed: false
        })
        .sort({ createdAt: -1 })
        .exec();
    }

}

module.exports = QueueItemRepository(QueueItem)