import React, {useEffect, useState} from 'react';
import {LoginScreen} from '../screens/Login/ui';
import {Tabs} from '../navigation/tabs/Tabs';
import {NavigationContainer} from '@react-navigation/native';
import {getUsername} from "./asyncStore";
import {Text} from "react-native";
import {Logout} from "../screens/LogOut";


export const Content = () => {
    //const [loginName, setLoginName] = useState<any>();
    const location = useSelector(getLocation);

    useEffect(() => {
        const fetchUser = async () => {
            let userName = await getUsername();
            dispatch(setLocation('app'));
            //setLoginName(userName)
        }

        fetchUser();
    }, [])

    if (location === 'login') {
        return <LoginScreen/>;
    } else if (location === 'register') {
        return <LoginScreen/>;
    } else {
        // return <NavigationContainer>
        //     <Tabs/>
        // </NavigationContainer>;
        return <Logout/>
    }
};
