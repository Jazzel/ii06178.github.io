import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import drawer from "../components/drawer";

function Dashboard() {
  return (
    // <NavigationContainer>
    //   <NativeBaseProvider>
    // <drawer />
    //   </NativeBaseProvider>
    // </NavigationContainer>
    <Text>Dashboard</Text>
  );
}

export default () => {
  return <Dashboard />;
};
