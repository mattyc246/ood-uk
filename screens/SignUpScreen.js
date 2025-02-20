import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Container, Content, Button, Text } from "native-base";
import SignUpForm from "../components/SignUpForm";
import PageHeader from "../components/PageHeader";

const SignUpPage = () => {
  return (
    <Container style={styles.container}>
      <PageHeader title="Sign Up" />
      <Content contentContainerStyle={styles.content}>
        <SignUpForm />
        <View style={styles.buttonContainer}>
          <Button transparent style={styles.button} block>
            <Text>Read Terms & Conditions</Text>
          </Button>
          <Text style={styles.text}>
            By clicking Sign Up, you agree to the above terms & conditions.
          </Text>
          <Button block style={styles.button}>
            <Text>Sign Up</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 11,
    textAlign: "center"
  }
});

export default SignUpPage;
