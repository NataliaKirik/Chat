import React, {FC} from "react";
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {HomeScreen} from "../screens/Home/HomeScreen";
import {FeedBackScreen} from "../screens/FeedBackScreen";
import {FriendScreen} from "../screens/FriendsScreen";
import I18n from "../i18n";

const Stack = createStackNavigator();

export const                                    HomeScreenNavigator: FC = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: I18n.t('tabHome')}}/>
            <Stack.Screen name="FeedBack Form" component={FeedBackScreen}
                          options={{
                              title: I18n.t('tabFeedBack'),
                              headerLeft: (props) => (
                                  <HeaderBackButton
                                      {...props}
                                      label={I18n.t('headerButtonBack')}
                                  />
                              ),
                          }}/>
            <Stack.Screen name="Friends" component={FriendScreen} options={{title: I18n.t('tabFriends')}}/>
        </Stack.Navigator>

    );
};


