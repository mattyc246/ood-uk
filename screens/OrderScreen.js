import React from "react";
import { Container, Content, Text } from "native-base";
import MainHeader from "../components/MainHeader";

const OrderScreen = () => {
  return (
    <Container style={styles.container}>
      <MainHeader />
      <Content>
        <Text>Order</Text>
      </Content>
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: "rgb(145, 208, 91)"
  }
};

export default OrderScreen;
