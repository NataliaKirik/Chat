import React, {FC} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {MessageScreen} from "./MessageScreen";
import {UserMessagesScreen} from "../UserMessagesScreen";
import I18n from "../../i18n";


const Stack = createStackNavigator();

export const MessagesScreenNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Messages" component={MessageScreen} options={{title: I18n.t('tabMessages')}}/>
            <Stack.Screen name="User's message" component={UserMessagesScreen}/>
        </Stack.Navigator>

    );
};
