import React, {FC} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import EntypoIcons from "react-native-vector-icons/Entypo";
import {HomeScreenNavigator} from "../screens/Home/HomeScreenNavigator";
import {MessagesScreenNavigator} from "../screens/Messages/MessagesScreenNavigator";
import I18n from '../i18n';


const Tab = createBottomTabNavigator();

export const Tabs: FC = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
                if (route.name === "Home") {
                    return <EntypoIcons name={"home"} size={size} color={color}/>;

                } else if (route.name === "Messages") {
                    return <EntypoIcons name={"message"} size={size} color={color}/>;
                }
            }
        })}
                       tabBarOptions={{
                           activeTintColor: "#df245e",
                           inactiveTintColor: "gray"
                       }}>
            <Tab.Screen name={I18n.t('tabButtonHome')} component={HomeScreenNavigator}/>
            <Tab.Screen name={I18n.t('tabButtonMessages')} component={MessagesScreenNavigator}/>
        </Tab.Navigator>
    );
};
