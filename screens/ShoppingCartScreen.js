import React from "react";
import { Container, Content, Text } from "native-base";
import MainHeader from "../components/MainHeader";

const CartScreen = () => {
  return (
    <Container style={styles.container}>
      <MainHeader
        height={75}
        showCart={false}
        showBack={true}
        title="Shopping Cart"
      />
      <Content contentContainerStyle={styles.content}>
        <Text>Cart</Text>
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

export default CartScreen;
