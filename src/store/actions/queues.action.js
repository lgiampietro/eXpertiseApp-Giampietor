export const SELECT_QUEUE = 'SELECT_QUEUE'
export const FILTER_QUEUES = 'FILTER_QUEUES'

export const filterQueues = (statusId) => ({
    type:FILTER_QUEUES,
    statusId
})

export const selectQueue = (queueId) => ({
    type:SELECT_QUEUE,
    queueId
})


