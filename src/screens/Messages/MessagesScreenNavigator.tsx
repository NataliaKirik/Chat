import React, {FC} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {MessageScreen} from "./MessageScreen";
import {UserMessagesScreen} from "../UserMessagesScreen";


const Stack = createStackNavigator();

export const MessagesScreenNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Messages" component={MessageScreen}/>
            <Stack.Screen name="User's message" component={UserMessagesScreen}/>
        </Stack.Navigator>

    );
};
