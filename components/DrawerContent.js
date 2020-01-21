import React from "react";
import { Container, Content, Text, Button, View, H1, H3 } from "native-base";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";

const DrawerContent = ({ navigation }) => {
  const { currentUser } = useStores();
  const menuButtons = [
    {
      screen: "MainScreen",
      text: "Home"
    },
    {
      screen: "OrderScreen",
      text: "Current Orders"
    },
    {
      screen: "OrderHistoryScreen",
      text: "Order History"
    },
    {
      screen: "FavoritesScreen",
      text: "Favorites"
    },
    {
      screen: "RecipesScreen",
      text: "Recipes"
    }
  ];
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <View style={styles.upperBox}>
          <H1>Welcome Back!</H1>
          <H3>
            {currentUser.firstName} {currentUser.lastName}
          </H3>
        </View>
        <View style={styles.buttonContainer}>
          {menuButtons.map((button, index) => {
            return (
              <Button
                key={index}
                onPress={() => navigation.navigate(button.screen)}
                full
                light
                style={styles.menuButton}
              >
                <View
                  style={
                    index == navigation.state.index
                      ? styles.activeBar
                      : styles.homeBar
                  }
                />
                <Text style={styles.flexText}>{button.text}</Text>
              </Button>
            );
          })}
        </View>
        <Button onPress={() => currentUser.logOutUser()} full danger>
          <Text>Logout</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: "rgb(145, 208, 91)"
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  upperBox: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white"
  },
  buttonContainer: {
    width: "100%",
    paddingRight: "5%"
  },
  menuButton: {
    width: "100%",
    marginTop: 15,
    height: 60,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 15
  },
  homeBar: {
    height: "100%",
    width: 15,
    backgroundColor: "lightblue"
  },
  activeBar: {
    height: "100%",
    width: 15,
    backgroundColor: "tomato"
  },
  flexText: {
    flex: 1,
    textAlign: "center"
  }
};

export default observer(DrawerContent);
