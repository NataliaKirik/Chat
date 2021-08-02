import React, {FC} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Tabs} from "../navigation/Tabs";
import {Provider} from 'react-redux';
import {store} from "./store";

const App: FC = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tabs/>
            </NavigationContainer>
        </Provider>

    );
};


export default App;
