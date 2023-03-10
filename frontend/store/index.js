import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import tweetReducer from './tweets'
// import oneTweetReducer from "./oneTweet";
// import commentReducer from './comments'
// preloadState: {
//   session: sessionInfo,
//   posts: listOfPosts,
//   users: listsOfUsers
// }
const rootReducer = combineReducers({
    session: sessionReducer,
    tweets: tweetReducer,
    // oneTweet: oneTweetReducer,
    // comments: commentReducer
    // posts: postsReducer,
    // users: usersReducers
});

let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    // const logger = require("redux-logger").default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk /*, logger*/));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
