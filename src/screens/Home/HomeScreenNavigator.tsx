import React, {FC} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from "./HomeScreen";
import {FeedBackScreen} from "../FeedBackScreen";
import {FriendScreen} from "../FriendsScreen";
import I18n from "../../i18n";

const Stack = createStackNavigator();

export const HomeScreenNavigator: FC = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: I18n.t('tabHome')}}/>
            <Stack.Screen name="FeedBack Form" component={FeedBackScreen} options={{title: I18n.t('tabFeedBack')}}/>
            <Stack.Screen name="Friends" component={FriendScreen} options={{title: I18n.t('tabFriends')}}/>
        </Stack.Navigator>

    );
};


