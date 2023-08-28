import "react-native-gesture-handler";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { GlobalStateProvider } from "./components/GlobalStateProvider";
import { persistor, store } from "./redux/store";
import { Text } from "react-native";
import Main from "./components/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <GlobalStateProvider>
            <Main />
          </GlobalStateProvider>
      </PersistGate>
    </Provider>
  );
}
