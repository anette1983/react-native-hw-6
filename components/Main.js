import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { authStateChangeUser } from "../redux/auth/authOperations";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "../routes";
import { selectStateChange } from "../redux/auth/selectors";

const Main = () => {
//   const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const stateChange = useSelector(selectStateChange);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);
 
  const routing = useRoute(stateChange);

  return (
    <NavigationContainer>
      {routing}

      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default Main;
