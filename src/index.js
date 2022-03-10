import React from "react";
import ReactDOM from "react-dom";
import { MovieProvider } from "./context/MoviesContext";
import { TvProvider } from "./context/TvContext";
import { BrowserRouter } from "react-router-dom";

import { store } from "./app/store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MovieProvider>
        <TvProvider>
          <App />
        </TvProvider>
      </MovieProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
