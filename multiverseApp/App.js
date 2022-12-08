import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import ChatScreen from "./screens/ChatScreen";
import { NativeBaseProvider } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Events from "./screens/Events";

import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

// const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen name="Events" component={Events} />
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
