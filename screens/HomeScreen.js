import React from "react";
import {
  Container,
  Content,
  Text,
  View,
  Item,
  Input,
  Icon,
  H1,
  Button
} from "native-base";
import MainHeader from "../components/MainHeader";

const HomeScreen = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <MainHeader height={100} showBack={false} showCart={true} title="" />
      <Content contentContainerStyle={styles.content}>
        <View style={styles.pageHeader}>
          <H1 style={styles.textCenter}>OOD</H1>
          <Text style={styles.textCenter}>Browse, compare, buy</Text>
          <Item style={styles.searchBar}>
            <Input placeholder="Search Products" />
            <Icon active name="search" />
          </Item>
        </View>
        <Button
          onPress={() => navigation.navigate("OrderScreen")}
          small
          warning
          style={styles.recentButton}
        >
          <Text>Your Recently Purchased Items</Text>
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
    alignItems: "center",
    backgroundColor: "white"
  },
  pageHeader: {
    height: 160,
    width: "100%",
    backgroundColor: "rgb(145, 208, 91)",
    padding: 5,
    alignItems: "center"
  },
  textCenter: {
    textAlign: "center",
    marginBottom: 15
  },
  searchBar: {
    backgroundColor: "white",
    width: "90%",
    marginTop: 10,
    borderRadius: 10
  },
  recentButton: {
    width: "60%",
    marginRight: "auto",
    borderRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
};

export default HomeScreen;
