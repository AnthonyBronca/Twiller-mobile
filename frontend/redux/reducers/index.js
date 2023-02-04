import { combineReducers } from 'redux';
import likereducer from './likereducer';

let reducers = combineReducers({
    likereducer: likereducer,
})

const rootReducer = (state, action) => {
    return reducers(state, action)
};

export default rootReducer
