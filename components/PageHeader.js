import React from "react";
import { withNavigation } from "react-navigation";
import { Header, Left, Right, Body, Title, Button, Icon } from "native-base";

const PageHeader = ({ navigation, title }) => {
  return (
    <Header style={styles.header}>
      <Left>
        <Button onPress={() => navigation.goBack()} transparent>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

const styles = {
  header: {
    backgroundColor: "rgb(145, 208, 91)",
    margin: 0,
    height: 75
  }
};

export default withNavigation(PageHeader);
