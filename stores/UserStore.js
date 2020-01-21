import { observable, decorate, action } from "mobx";
import { AsyncStorage } from "react-native";

class UserStore {
  firstName = "";
  lastName = "";
  email = "";
  isLoggedIn = false;

  logInUser(username, password) {
    if (username == "admin" && password == "admin") {
      this.firstName = "Matthew";
      this.lastName = "Cross";
      this.email = "mattyc246@gmail.com";
      this.isLoggedIn = true;

      AsyncStorage.setItem(
        "user",
        JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email
        })
      );
    }
  }

  logOutUser() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.isLoggedIn = false;

    AsyncStorage.removeItem("user");
  }

  hasLoggedInBefore() {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        let logUser = JSON.parse(user);
        this.firstName = logUser.firstName;
        this.lastName = logUser.lastName;
        this.email = logUser.email;
        this.isLoggedIn = true;
        return true;
      } else {
        return false;
      }
    });
  }
}

decorate(UserStore, {
  firstName: observable,
  lastName: observable,
  email: observable,
  isLoggedIn: observable,
  logInUser: action,
  logOutUser: action
});

const currentUser = new UserStore();

export default currentUser;
