import React, {FC} from "react";
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {MessageScreen} from "../screens/Messages/ui/MessageScreen";
import {UserMessagesScreen} from "../screens/Chat/ui/UserMessagesScreen";
import I18n from "../i18n";
import {ChatScreen} from "../screens/Chat/ui/ChatScreen";


const Stack = createStackNavigator();

export const MessagesScreenNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={I18n.t('tabMessages')} component={MessageScreen}
            />
            <Stack.Screen name={I18n.t('userMessages')} component={UserMessagesScreen}
                          options={{
                              headerLeft: (props) => (
                                  <HeaderBackButton
                                      {...props}
                                      label={I18n.t('headerButtonBack')}
                                  />
                              ),
                          }}/>
            <Stack.Screen name={I18n.t('chatTab')} component={ChatScreen}
            />
        </Stack.Navigator>

    );
};
