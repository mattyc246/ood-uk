import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import OrderView from "../screens/OrderScreen";
import CartScreen from "../screens/ShoppingCartScreen";

const MainNavigator = createStackNavigator(
  {
    MainScreen: HomeScreen,
    OrderScreen: OrderView,
    ShoppingCartScreen: CartScreen
  },
  {
    initialRouteName: "MainScreen",
    headerMode: "none"
  }
);

export default createAppContainer(MainNavigator);
