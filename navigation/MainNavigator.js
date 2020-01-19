import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";

const MainNavigator = createStackNavigator(
  {
    MainScreen: HomeScreen
  },
  {
    initialRouteName: "MainScreen",
    headerMode: "none"
  }
);

export default createAppContainer(MainNavigator);
