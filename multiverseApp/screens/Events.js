import { View, Text } from "react-native";
import React from "react";
import {
  Box,
  Divider,
  FormControl,
  Input,
  ScrollView,
  Stack,
  WarningOutlineIcon,
} from "native-base";
const Events = () => {
  return (
    <ScrollView w="100%">
      <Stack
        space={2.5}
        alignSelf="center"
        px="4"
        safeArea
        mt="4"
        w={{
          base: "100%",
          md: "25%",
        }}
      >
        <Box>
          <Text bold fontSize="xl" mb="4">
            Default
          </Text>
          <FormControl mb="5">
            <FormControl.Label>Event Name</FormControl.Label>
            <Input />
            <FormControl.HelperText>
              Choose the event you wish to participate in.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
        </Box>
        <Box>
          <Text bold fontSize="xl" mb="4">
            Default
          </Text>
          <FormControl mb="5">
            <FormControl.Label>Role</FormControl.Label>
            <Input />
            <FormControl.HelperText>Choose your role.</FormControl.HelperText>
          </FormControl>
          <Divider />
        </Box>
      </Stack>
    </ScrollView>
  );
};

export default Events;
