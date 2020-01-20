import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

const CartScreen = () => {
  return (
    <Container style={styles.container}>
      <Header transparent>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Cart Screen</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>Cart</Text>
      </Content>
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: "rgb(145, 208, 91)"
  }
};

export default CartScreen;
