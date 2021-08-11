import React from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from './store';
import { NameScreen } from '../screens/Login/ui/LoginNameScreen';
import { Tabs } from '../navigation/tabs/Tabs';
import { NavigationContainer } from '@react-navigation/native';


export const Content = () => {
    const loginName = useSelector<AppRootStateType, string>(state => state.loginName.loginName);
    if (!loginName) {
        return <NameScreen />;
    } else {
        return <NavigationContainer>
            <Tabs />
        </NavigationContainer>;
    }
};
