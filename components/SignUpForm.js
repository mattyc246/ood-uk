import React from "react";
import { Dimensions } from "react-native";
import { Form, Item, Input, Icon } from "native-base";

const SignUpForm = () => {
  return (
    <Form style={styles.form}>
      <Item style={styles.input}>
        <Icon active type="FontAwesome5" name="id-card" />
        <Input placeholder="Full Name" />
      </Item>
      <Item style={styles.input}>
        <Icon active type="FontAwesome5" name="user" />
        <Input placeholder="Username" />
      </Item>
      <Item style={styles.input}>
        <Icon active type="FontAwesome5" name="key" />
        <Input secureTextEntry placeholder="Password" />
      </Item>
      <Item style={styles.input}>
        <Icon active type="FontAwesome5" name="key" />
        <Input secureTextEntry placeholder="Confirm Password" />
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
    margin: 10,
    borderRadius: 10
  }
};

export default SignUpForm;
