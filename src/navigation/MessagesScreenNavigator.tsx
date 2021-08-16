import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MessageScreen } from '../screens/Messages/ui';
import I18n from '../i18n';
import { ChatScreen } from '../screens/Chat/ui';
import { Message } from '../components/Message';


const Stack = createStackNavigator();

export const MessagesScreenNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName={I18n.t('tabMessages')}>
            <Stack.Screen name={I18n.t('tabMessages')} component={MessageScreen} />
            <Stack.Screen name={'Message'} component={Message} />
            <Stack.Screen name={I18n.t('chatTab')} component={ChatScreen} />
        </Stack.Navigator>

    );
};
