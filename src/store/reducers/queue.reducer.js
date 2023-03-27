import {DATA} from '../../data/queuesList'
import {SELECT_QUEUE,FILTER_QUEUES} from '../actions/queues.action'

const initialState = {
    queues:DATA,
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
            const filter = state.queues.filter(queue=>queue.statusId ===action.statusId)
            return {
                ...state, 
                filterQueues: filter            
            }
        default:
            return state
    }
}

export default QueuesReducer;