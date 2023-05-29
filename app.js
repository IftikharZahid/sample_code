import React, { useState } from "react";
import { StatusBar } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { OnBoardScreen } from "./scr/screens/OnBoardScreen";
import { HomeScreen } from "./scr/screens/HomeScreen";
import { DetailedScreen } from "./scr/screens/DetailedScreen";
import { colors } from "./scr/components/theme/designSystem";

const Stack = createStackNavigator();

const App = (navigation) => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="OnBoardScreen"
          component={OnBoardScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailedScreen"
          component={DetailedScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
