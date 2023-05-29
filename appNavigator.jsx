import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

function appNavigator(navigation) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export { appNavigator };
