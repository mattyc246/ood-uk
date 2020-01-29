import React from "react";
import { View, Text, Container, Content } from "native-base";
import MainHeader from "../components/MainHeader";

const CategoriesScreen = () => {
  return (
    <Container style={styles.container}>
      <MainHeader
        height={100}
        showBack={false}
        showCart={true}
        title="Products"
      />
      <Content contentContainerStyle={styles.content}>
        <Text>Hello World</Text>
      </Content>
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: "rgb(145, 208, 91)"
  },
  content: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center"
  }
};

export default CategoriesScreen;
