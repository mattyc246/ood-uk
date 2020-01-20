import React, { useState, useEffect } from "react";
import { View, AsyncStorage } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
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
    <View style={styles.safeView}>
      {hasUser ? <HomeScreen /> : <AuthNavigator />}
    </View>
  );
};

export default App;

const styles = {
  safeView: {
    flex: 1,
    backgroundColor: "rgb(145, 208, 91)"
  }
};
