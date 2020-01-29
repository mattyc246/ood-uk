import React from "react";
import { View, Text, Container } from "native-base";
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
      <View>
        <Text>Hello World</Text>
      </View>
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: "rgb(145, 208, 91)"
  }
};

export default CategoriesScreen;
