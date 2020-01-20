import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import useStores from "./hooks/useStores";
import MainNavigator from "./navigation/MainNavigator";
import AuthNavigator from "./navigation/AuthNavigator";

const AppContent = () => {
  const [isReady, setIsReady] = useState(false);
  const [hasUser, setHasUser] = useState(true);
  const { currentUser } = useStores();

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    setIsReady(true);
    if (currentUser.hasLoggedInBefore()) {
      currentUser.logInUser("admin", "admin");
      setHasUser(true);
    } else {
      setHasUser(false);
    }
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <View style={styles.safeView}>
      {currentUser.isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </View>
  );
};

export default observer(AppContent);

const styles = {
  safeView: {
    flex: 1,
    backgroundColor: "rgb(145, 208, 91)"
  }
};
