import React, {FC} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Tabs} from "./src/navigation/Tabs";
import {Provider as PaperProvider} from 'react-native-paper';


const App: FC = () => {
    return (

        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>

    );
};


export default App;
