import React from 'react';
import { LoginScreen } from '../screens/Login/ui';
import { useSelector } from 'react-redux';
import { AppRootStateType } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from '../navigation/tabs/Tabs';


export const Content = () => {
    const location = useSelector<AppRootStateType, string>((state) => state.content.location);

    if (location === 'app') {
        return <NavigationContainer>
            <Tabs />
        </NavigationContainer>;
    } else {
        return <LoginScreen />;
    }
};
