import React, {FC} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from "./HomeScreen";
import {FeedBackScreen} from "../FeedBackScreen";
import {FriendScreen} from "../FriendsScreen";

const Stack = createStackNavigator();

export const HomeScreenNavigator: FC = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="FeedBack Form" component={FeedBackScreen}/>
            <Stack.Screen name="Friends" component={FriendScreen}/>
        </Stack.Navigator>

    );
};


