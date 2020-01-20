import React from "react";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";
import { withNavigation } from "react-navigation";

const MainHeader = ({ navigation, height, showBack, showCart, title }) => {
  return (
    <Header transparent style={{ height: height }}>
      {showBack ? (
        <Left>
          <Button onPress={() => navigation.goBack()} transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      ) : (
        <Left>
          <Button onPress={() => navigation.openDrawer()} transparent>
            <Icon name="menu" />
          </Button>
        </Left>
      )}
      <Body>
        <Title>{title}</Title>
      </Body>
      {showCart ? (
        <Right>
          <Button
            onPress={() => navigation.navigate("ShoppingCartScreen")}
            transparent
          >
            <Icon name="cart" />
          </Button>
        </Right>
      ) : (
        <Right />
      )}
    </Header>
  );
};

export default withNavigation(MainHeader);
