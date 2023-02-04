const { View, Text } = require("react-native");
const { default: App } = require("./App");
import configureStore from "./store";
import { Provider } from "react-redux";
import * as sessionActions from "./store/session";

const store = configureStore();

function Root() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default Root
