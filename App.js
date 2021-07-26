import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import {HomeScreen} from "./screens/HomeScreen";
import {MessageScreen} from "./screens/MessageScreen";

const Tab = createBottomTabNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    if (route.name === 'Home') {
                        return <EntypoIcons name={'home'} size={size} color={color}/>;

                    } else if (route.name === 'Messages') {
                        return <EntypoIcons name={'message'} size={size} color={color}/>;

                    }

                },
            })}
                           tabBarOptions={{
                               activeTintColor: '#df245e',
                               inactiveTintColor: 'gray',
                           }}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Messages" component={MessageScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};


export default App;
