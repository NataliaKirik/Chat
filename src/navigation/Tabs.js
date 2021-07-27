import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { HomeScreen } from "../screens/HomeScreen";
import { MessageScreen } from "../screens/MessageScreen";


const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: () => {
        if (route.name === "Home") {
          return <EntypoIcons name={"home"} />;

        } else if (route.name === "Messages") {
          return <EntypoIcons name={"message"} />;

        }
      },
    })}
                   tabBarOptions={{
                     activeTintColor: "#df245e",
                     inactiveTintColor: "gray",
                   }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
    </Tab.Navigator>
  );
};
