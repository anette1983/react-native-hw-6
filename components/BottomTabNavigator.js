import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "../Screens/mainScreen/ProfileScreen";
import { View, Pressable } from "react-native";
import LogoutIcon from "../assets/images/log-out.svg";
import AddIcon from "../assets/images/union.svg";
import UserIcon from "../assets/images/user.svg";
import GridIcon from "../assets/images/grid.svg";
import BackIcon from "../assets/images/arrow-left.svg";
import { useNavigation } from "@react-navigation/native";
import DefaultScreenPosts from "../Screens/nestedScreens/DefaultScreenPosts";
import { useDispatch } from "react-redux";
import { exit } from "../utils/exit";

const Tabs = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const screenOptions = ({ route }) => ({
    headerShown: true,
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
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 71,
      paddingTop: 17,
      paddingBottom: 30,
      paddingHorizontal: 90,
      boxShadow: " 0px -0.5px 0px 0px rgba(0, 0, 0, 0.30)",
      backdropFilter: "blur(13.591408729553223px)",
      borderTopWidth: 1,
    },
    headerLeft: () => {
      return (
        <Pressable
          style={{ marginLeft: 16 }}
          onPress={() => navigation.navigate("Публікації")}
        >
          <BackIcon />
        </Pressable>
      );
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Tabs.Navigator
        initialRouteName="Публікації"
        screenOptions={screenOptions}
      >
        <Tabs.Screen
          name="Публікації"
          component={DefaultScreenPosts}
          options={{
            headerTitle: "Публікації",
            headerLeft: null,
            tabBarIcon: ({ focused, size, color }) => (
              <GridIcon color={focused ? "#FF6C00" : color} />
            ),
            headerRight: () => {
              return (
                <Pressable
                  style={{ marginRight: 16 }}
                  onPressOut={() => {
                    exit(dispatch);
                  }}
                >
                  <LogoutIcon />
                </Pressable>
              );
            },
            tabBarIcon: ({ focused, size, color }) => (
              <GridIcon color={focused ? "#FF6C00" : color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Створити публікацію"
          component={CreatePostsScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => {
              return (
                <View
                  style={{
                    width: 70,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#FF6C00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AddIcon size={size} color={color} />
                </View>
              );
            },
            tabBarStyle: { display: "none" },
            title: "Створити публікацію",
            headerTitle: "Створити публікацію",
          }}
        />
        <Tabs.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,

            headerStyle: { display: "none" },
            tabBarIcon: ({ focused, size, color }) => (
              <UserIcon size={size} color={focused ? "#FF6C00" : color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};
