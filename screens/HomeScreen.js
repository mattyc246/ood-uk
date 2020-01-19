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

const HomeScreen = () => {
  return (
    <Container style={styles.container}>
      <Header transparent>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Home Screen</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>Home</Text>
      </Content>
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: "rgb(145, 208, 91)"
  }
};

export default HomeScreen;
