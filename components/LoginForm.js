import React from "react";
import { Dimensions } from "react-native";
import { Form, Item, Input, Icon } from "native-base";

const LoginForm = () => {
  return (
    <Form style={styles.form}>
      <Item style={styles.input}>
        <Icon active type="FontAwesome5" name="user" />
        <Input placeholder="Username" />
      </Item>
      <Item style={styles.input}>
        <Icon active type="FontAwesome5" name="lock" />
        <Input secureTextEntry={true} type="password" placeholder="Password" />
      </Item>
    </Form>
  );
};

const styles = {
  form: {
    width: Dimensions.get("window").width - 50
  },
  input: {
    backgroundColor: "white",
    paddingLeft: 10,
    margin: 10
  }
};

export default LoginForm;
