import { observable, decorate } from "mobx";
import { AsyncStorage } from "react-native";

class UserStore {
  firstName = "";
  lastName = "";
  email = "";
  isLoggedIn = false;

  logInUser = (username, password) => {
    if (username == "admin" && password == "admin") {
      firstName = "Matthew";
      lastName = "Cross";
      email = "mattyc246@gmail.com";
      isLoggedIn = true;
    }
  };

  hasLoggedInBefore = () => {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        return true;
      } else {
        return false;
      }
    });
  };
}

decorate(UserStore, {
  firstName: observable,
  lastName: observable,
  email: observable
});

const currentUser = new UserStore();

export default currentUser;
