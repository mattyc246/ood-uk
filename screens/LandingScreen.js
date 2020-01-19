import React from "react";
import { Dimensions, View } from "react-native";
import { Container, Content, Button, Text } from "native-base";

const LandingScreen = () => {
  return (
    <Container style={styles.container}>
      <Content padder contentContainerStyle={styles.content}>
        <Text>OOD Grocery</Text>
        <View style={styles.buttonContainer}>
          <Button block style={styles.button}>
            <Text>Login</Text>
          </Button>
          <Button block style={styles.button} light>
            <Text>Sign Up</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(145, 208, 91)"
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  buttonContainer: {
    width: 350
  },
  button: {
    marginTop: 10
  }
};

export default LandingScreen;
