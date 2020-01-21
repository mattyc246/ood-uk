import React from "react";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import OrderView from "../screens/OrderScreen";
import CartScreen from "../screens/ShoppingCartScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import DrawerContent from "../components/DrawerContent";

const MainNavigator = createDrawerNavigator(
  {
    MainScreen: {
      screen: ({ screenProps, navigation }) => (
        <HomeScreen {...screenProps} navigation={navigation} />
      )
    },
    OrderScreen: OrderView,
    ShoppingCartScreen: CartScreen
  },
  {
    initialRouteName: "MainScreen",
    headerMode: "none",
    contentComponent: ({ navigation }) => {
      return <DrawerContent navigation={navigation} />;
    },
    drawerWidth: "75%"
  }
);

export default createAppContainer(MainNavigator);
