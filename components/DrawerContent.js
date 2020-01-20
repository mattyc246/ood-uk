import React from "react";
import {
  Container,
  Content,
  Text,
  Button,
  View,
  H1,
  List,
  ListItem
} from "native-base";
import useStores from "../hooks/useStores";

const DrawerContent = ({ navigation }) => {
  const { currentUser } = useStores();
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <View style={styles.upperBox}>
          <H1>Welcome Back!</H1>
        </View>
        <List style={styles.list}>
          <ListItem style={styles.listItem}>
            <Button
              onPress={() => navigation.navigate("MainScreen")}
              full
              light
              style={styles.menuButton}
            >
              <Text>Home</Text>
            </Button>
          </ListItem>
          <ListItem style={styles.listItem}>
            <Button
              onPress={() => navigation.navigate("OrderScreen")}
              full
              light
              style={styles.menuButton}
            >
              <Text>My Orders</Text>
            </Button>
          </ListItem>
          <ListItem style={styles.listItem}>
            <Button full light style={styles.menuButton}>
              <Text>Something</Text>
            </Button>
          </ListItem>
          <ListItem style={styles.listItem}>
            <Button full light style={styles.menuButton}>
              <Text>Something</Text>
            </Button>
          </ListItem>
          <ListItem style={styles.listItem}>
            <Button full light style={styles.menuButton}>
              <Text>Something</Text>
            </Button>
          </ListItem>
        </List>
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
  list: {
    width: "100%"
  },
  menuButton: {
    width: "100%"
  },
  listItem: {
    width: "100%",
    marginLeft: 0
  }
};

export default DrawerContent;
