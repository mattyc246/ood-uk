import { observable, decorate } from "mobx";

class UserStore {
  firstName = "";
  lastName = "";
  email = "";
  isLoggedIn = false;
}

decorate(UserStore, {
  firstName: observable,
  lastName: observable,
  email: observable
});

const currentUser = new UserStore();

export default currentUser;
