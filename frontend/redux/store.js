import { createStore, combineReducers } from 'redux';
import likeReducer from './reducers/likereducer';

const rootReducer = combineReducers(
    { likes: likeReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;
