import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import { Box } from "native-base";
import ChatScreen from "../screens/ChatScreen";
import Events from "../screens/Events";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../screens/Dashboard";

const Drawers = createDrawerNavigator();
function CustomDrawerContent({ navigation }) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate("Dashboard");
      }}
    />
  );
}
function Drawer(props) {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      ></Drawer.Navigator>
    </Box>
  );
}

export default Drawer;
