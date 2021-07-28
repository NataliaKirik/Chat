import React, {FC} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {MessageScreen} from "./MessageScreen";
import {UserMessagesScreen} from "../UserMessagesScreen";
import {CommunitiesScreen} from "../CommunitiesScreen";

const Stack = createStackNavigator();

export const MessagesScreenNavigator: FC = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Messages" component={MessageScreen}/>
            <Stack.Screen name="UserMessage" component={UserMessagesScreen}/>
            <Stack.Screen name="Communities" component={CommunitiesScreen}/>
        </Stack.Navigator>

    );
};
