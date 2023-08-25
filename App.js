import "react-native-gesture-handler";
import React, { useContext } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
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
import { persistor, store } from "./redux/store";
import { Text } from "react-native";

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
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <AuthStateProvider>
          <GlobalStateProvider>
            {/* <Provider store={store}> */}
            <NavigationContainer>
              {routing}

              <StatusBar style="auto" />
            </NavigationContainer>
            {/* </Provider> */}
          </GlobalStateProvider>
        </AuthStateProvider>
      </PersistGate>
    </Provider>
  );
}
