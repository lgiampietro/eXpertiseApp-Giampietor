import { createStore, combineReducers } from "redux";
import StatusReducer from "./reducers/status.reducer";
import QueuesReducer from "./reducers/queue.reducer";

const RootReducer = combineReducers({
    statuses:StatusReducer,
    queuesList:QueuesReducer
})

export default createStore(RootReducer)