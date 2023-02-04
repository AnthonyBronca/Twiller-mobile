import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home/Home";
// import { Provider as ReduxProvider } from 'react-redux';
// import configureStore from './redux/store'
import { Provider } from "react-redux";
// import rootReducer from "./redux/reducers";
import configureStore from './redux/store';

const store = configureStore();


export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
