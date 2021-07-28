import React, {FC} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from "./HomeScreen";
import {FeedScreen} from "../FeedScreen";
import {FriendScreen} from "../FriendsScreen";

const Stack = createStackNavigator();

export const HomeScreenNavigator: FC = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Feed" component={FeedScreen}/>
            <Stack.Screen name="Friends" component={FriendScreen}/>
        </Stack.Navigator>

    );
};


