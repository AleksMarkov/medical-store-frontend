//src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import { AuthProvider } from "./context/AuthContext";
import store from "./redux/store";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <AuthProvider>
          <GlobalStyles />
          <App />
        </AuthProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
