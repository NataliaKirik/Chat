import React, {FC} from "react";
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {MessageScreen} from "../screens/Messages/ui/MessageScreen";
import {Name} from "../screens/Chat/ui/Name";
import I18n from "../i18n";
import {ChatMessagesScreen} from "../screens/Chat/ui/ChatMessagesScreen";


const Stack = createStackNavigator();

export const MessagesScreenNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={I18n.t('tabMessages')} component={MessageScreen}
            />
            <Stack.Screen name={I18n.t('userMessages')} component={Name}
                          options={{
                              headerLeft: (props) => (
                                  <HeaderBackButton
                                      {...props}
                                      label={I18n.t('headerButtonBack')}
                                  />
                              ),
                          }}/>
            <Stack.Screen name={I18n.t('chatTab')} component={ChatMessagesScreen}
            />
        </Stack.Navigator>

    );
};
