const QueueItem = require('../models/QueueItem');
class QueueItemRepository {

    constructor(model) {
        this.model = model;
    }

    async queue(name, alias) {
        return await this.model.create({ name: name, alias: alias, consumed: false });
    }

    async dequeue(alias) {
        const items = await this.findByQueueAlias(alias);

        const firstItemId = items[0]._id;
        await this.model.findOneAndUpdate({ _id: firstItemId }, { consumed: true })

        return await this.findByQueueAlias(alias);
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