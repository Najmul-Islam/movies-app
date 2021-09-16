import React from "react";
import ReactDOM from "react-dom";
import { MovieProvider } from "./context/MoviesContext";
import { TvProvider } from "./context/TvContext";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <MovieProvider>
      <TvProvider>
        <App />
      </TvProvider>
    </MovieProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
