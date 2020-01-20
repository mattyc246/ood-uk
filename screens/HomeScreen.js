import React from "react";
import { Container, Content, Text } from "native-base";
import MainHeader from "../components/MainHeader";

const HomeScreen = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <MainHeader height={100} showBack={false} showCart={true} title="Home" />
      <Content contentContainerStyle={styles.content}>
        <Text>Home</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
};

export default HomeScreen;
