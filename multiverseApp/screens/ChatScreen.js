import { View, Text } from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Avatar } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  // const signOutNow = () => {
  //     signOut(auth).then(() => {
  //         // Sign-out successful.
  //         navigation.replace('Login');
  //     }).catch((error) => {
  //         // An error happened.
  //     });
  // }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            // source={{
            //     uri: auth?.currentUser?.photoURL,
            // }}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          // onPress={signOutNow}
        >
          <Text>logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={(messages) => onSend(messages)}
      // user={{
      //     _id: auth?.currentUser?.email,
      //     name: auth?.currentUser?.displayName,
      //     avatar: auth?.currentUser?.photoURL
      // }}
    />
  );
};

export default ChatScreen;
