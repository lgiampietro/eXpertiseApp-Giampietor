import {QUEUESLIST} from '../../data/queuesList'
import {SELECT_QUEUE,FILTER_QUEUES} from '../actions/queues.action'

const initialState = {
    queues:QUEUESLIST,
    filterQueues:[],
    selected:null
}

const QueuesReducer = (state=initialState,action)=>{    
    
    switch(action.type){
        case SELECT_QUEUE:
            return {
                ...state,
                selected: state.queues.find(queue=>queue.id ===action.queueId)
            }
        case FILTER_QUEUES:            
            return {
                ...state, 
                filterQueues: state.queues.filter(queue=>queue.statusId ===action.statusId)
            }
        default:
            return state
    }
}

export default QueuesReducer;