import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { thunk } from 'redux-thunk'; // ✅ Corrected import

import reducers from "./reducers";

const theme = createTheme(); // Creates an MUI theme

const store = createStore(reducers, compose(applyMiddleware(thunk))); // ✅ Thunk middleware applied

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);





