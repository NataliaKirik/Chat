import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import { HomeScreenNavigator } from './HomeScreenNavigator';
import { MessagesScreenNavigator } from './MessagesScreenNavigator';
import I18n from '../i18n';


const Tab = createBottomTabNavigator();

export const Tabs: FC = () => {
    const tabHomeName = I18n.t('tabHome');
    const tabMessagesName = I18n.t('tabMessages');
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                if (route.name === tabHomeName) {
                    return <EntypoIcons name={'home'} size={size} color={color} />;

                } else if (route.name === tabMessagesName) {
                    return <EntypoIcons name={'message'} size={size} color={color} />;
                }
            }
        })}
                       tabBarOptions={{
                           activeTintColor: '#df245e',
                           inactiveTintColor: 'gray',
                           labelStyle: {
                               fontSize: 12
                           }
                       }}>
            <Tab.Screen name={tabHomeName} component={HomeScreenNavigator} />
            <Tab.Screen name={tabMessagesName} component={MessagesScreenNavigator} />
        </Tab.Navigator>
    );
};
