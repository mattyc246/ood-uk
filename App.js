import React, { useState, useEffect } from "react";
import { SafeAreaView, AsyncStorage } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AuthenticationScreen from "./screens/AuthenticationScreen";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <AuthenticationScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = {
  safeView: {
    flex: 1,
    backgroundColor: "rgb(145, 208, 91)"
  }
};
