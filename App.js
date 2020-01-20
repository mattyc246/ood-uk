import React, { useState, useEffect } from "react";
import { View, AsyncStorage } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "mobx-react";
import currentUser from "./stores/UserStore";
import MainNavigator from "./navigation/MainNavigator";
import AuthNavigator from "./navigation/AuthNavigator";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [hasUser, setHasUser] = useState(true);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    setIsReady(true);
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        setHasUser(true);
      }
    });
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <Provider userStore={userStore}>
      <View style={styles.safeView}>
        {hasUser ? <MainNavigator /> : <AuthNavigator />}
      </View>
    </Provider>
  );
};

export default App;

const styles = {
  safeView: {
    flex: 1,
    backgroundColor: "rgb(145, 208, 91)"
  }
};
