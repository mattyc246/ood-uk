import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LandingScreen from "../screens/LandingScreen";
import LoginScreen from "../screens/AuthenticationScreen";
import SignUpScreen from "../screens/SignUpScreen";

const StackNavigator = createStackNavigator(
  {
    MainScreen: LandingScreen,
    LoginScreen: LoginScreen,
    SignUpScreen: SignUpScreen
  },
  {
    initialRouteName: "MainScreen",
    headerMode: "none"
  }
);

export default createAppContainer(StackNavigator);
