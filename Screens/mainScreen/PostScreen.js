import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "../nestedScreens/MapScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import { Pressable } from "react-native";
import BackIcon from "../../assets/images/arrow-left.svg";
import { BottomTabNavigator } from "../../components/BottomTabNavigator";

const NestedStack = createStackNavigator();
const screenOptions = ({ navigation, route }) => ({
  headerShown: false,
  headerStyle: { display: "none" },
  title: "Публікації",
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontFamily: "Roboto_500Medium",
    fontStyle: "normal",
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#212121",
  },
  headerStyle: {
    height: 88,
    borderBottomWidth: 1,
    boxShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.30)",
    // backdropFilter: "blur(13.591408729553223px)",
  },

  tabBarStyle: {
    display: "none,",
  },
  headerLeft: () => {
    return (
      <Pressable
        style={{ marginLeft: 16 }}
        onPress={() => {
          navigation.navigate("Posts");
        }}
      >
        <BackIcon />
      </Pressable>
    );
  },
});

const PostsScreen = ({ navigation }) => {
  return (
    <NestedStack.Navigator screenOptions={screenOptions}>
      <NestedStack.Screen
        name="Posts"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          headerTitle: "Публікації",
        }}
      />
      <NestedStack.Screen
        name="Maps"
        component={MapScreen}
        options={{
          headerShown: true,
          headerTitle: "Карти",
          headerTitleAlign: "center",
        }}
      />
      <NestedStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerShown: true,
          headerTitle: "Коментарі",
          headerTitleAlign: "center",
        }}
      />
    </NestedStack.Navigator>
  );
};

export default PostsScreen;
