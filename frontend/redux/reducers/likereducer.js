import { ADD_LIKE } from '../constants';


const initialState = {
    likes: {}
};

const likeReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case ADD_LIKE:
            newState = JSON.parse(JSON.stringify(state));
            newState.likes[`${action.payload.id}`] = action.payload;

            return newState;
        default:
            return state;
    }
}
export default likeReducer;
