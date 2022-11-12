import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Input, Button, Icon, Box, Image, AspectRatio } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
const Login = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    // <NativeBaseProvider>
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Login</Text>
      </View>
      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{ color: "black" }}
                _dark={{ color: "gray.300" }}
              />
            }
            variant="outline"
            placeholder="password"
            _light={{ placeholderTextColor: "blueGray.400" }}
            _dark={{ placeholderTextColor: "blueGray.50" }}
          />
        </View>
      </View>
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{ color: "black" }}
                _dark={{ color: "gray.300" }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="password"
            _light={{ placeholderTextColor: "blueGray.400" }}
            _dark={{ placeholderTextColor: "blueGray.50" }}
          />
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <Button
          style={styles.buttonDesign}
          onPress={() => navigation.navigate("Dashboard")}
        >
          LOGIN
        </Button>
      </View>
    </View>
    // </NativeBaseProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  LoginText: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "#026efd",
  },
});
