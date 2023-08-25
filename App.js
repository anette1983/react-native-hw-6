import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./routes";
import { AuthContext, AuthStateProvider } from "./components/AuthProvider";

import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { GlobalStateProvider } from "./components/GlobalStateProvider";


export default function App() {
  // const { isAuth, setIsAuth } = useContext(AuthContext);
  // console.log("setIsAuth in App", isAuth);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // const routing = useRoute(isAuth);
  const routing = useRoute(false);

  return (
    <AuthStateProvider>
      <GlobalStateProvider>
        <NavigationContainer>
          {routing}

          <StatusBar style="auto" />
        </NavigationContainer>
      </GlobalStateProvider>
    </AuthStateProvider>
  );
}
