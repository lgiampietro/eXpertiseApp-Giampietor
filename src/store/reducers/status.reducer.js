import {STATUS} from '../../data/status';
import { SELECT_STATUS } from '../actions/status.action';

const initialState = {
    statuses:STATUS,
    selected:null
}

const StatusReducer = (state=initialState,action) => {
    switch(action.type){
        case SELECT_STATUS:
            const index = state.statuses.findIndex(status=>status.id===action.statusId)
            if(index===-1) return state;
            const newState = {...state,selected:state.statuses[index]}
            return newState
        default:
            return state
    }
}

export default StatusReducer;