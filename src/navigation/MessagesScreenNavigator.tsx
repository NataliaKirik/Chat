import React, {FC} from "react";
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {MessageScreen} from "../screens/Messages/MessageScreen";
import {UserMessagesScreen} from "../screens/UserMessagesScreen";
import I18n from "../i18n";


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
        </Stack.Navigator>

    );
};
