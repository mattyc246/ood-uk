import React from "react";
import { Dimensions } from "react-native";
import { Form, Item, Input, Icon } from "native-base";

const LoginForm = ({ username, password, setUsername, setPassword }) => {
  return (
    <Form style={styles.form}>
      <Item style={styles.input}>
        <Icon active type="FontAwesome5" name="user" />
        <Input
          value={username}
          onChangeText={e => setUsername(e)}
          placeholder="Username"
        />
      </Item>
      <Item style={styles.input}>
        <Icon active type="FontAwesome5" name="lock" />
        <Input
          value={password}
          onChangeText={e => setPassword(e)}
          secureTextEntry={true}
          type="password"
          placeholder="Password"
        />
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
    borderRadius: 5
  }
};

export default LoginForm;
