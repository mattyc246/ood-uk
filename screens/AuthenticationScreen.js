import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { Container, Content, Text, Button, Icon } from "native-base";
import LoginForm from "../components/LoginForm";
import { withNavigation } from "react-navigation";
import PageHeader from "../components/PageHeader";

const AuthenticationScreen = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <PageHeader title="Login" />
      <Content contentContainerStyle={styles.content}>
        <LoginForm />
        <View>
          <Button block style={styles.button}>
            <Text>Login</Text>
          </Button>
          <View>
            <Text style={{ textAlign: "center" }}>Or</Text>
          </View>
          <Button iconLeft style={styles.button}>
            <Icon type="FontAwesome" ios="facebook" android="facebook" />
            <Text style={{ textAlign: "left" }}>Login with Facebook</Text>
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
    justifyContent: "space-evenly",
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
  }
});

export default withNavigation(AuthenticationScreen);
