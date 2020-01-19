import React from "react";
import { Dimensions, View } from "react-native";
import { Container, Content, Button, Text, H1 } from "native-base";
import { withNavigation } from "react-navigation";

const LandingScreen = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <Content padder contentContainerStyle={styles.content}>
        <H1>OOD Grocery</H1>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.push("LoginScreen")}
            block
            style={styles.button}
          >
            <Text>Login</Text>
          </Button>
          <Button
            onPress={() => navigation.push("SignUpScreen")}
            block
            style={styles.button}
            light
          >
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

export default withNavigation(LandingScreen);
