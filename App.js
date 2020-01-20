import React from "react";
import { Provider } from "mobx-react";
import currentUser from "./stores/UserStore";
import AppContent from "./AppContent";

const App = () => {
  return (
    <Provider currentUser={currentUser}>
      <AppContent />
    </Provider>
  );
};

export default App;
