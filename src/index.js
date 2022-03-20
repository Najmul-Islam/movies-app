import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// context api
import { MovieProvider } from "./context/MoviesContext";
import { GenresProvider } from "./context/GenresContext";
import { TvProvider } from "./context/TvContext";
import { TvGenresProvider } from "./context/TvGenresContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <MovieProvider>
      <GenresProvider>
        <TvProvider>
          <TvGenresProvider>
            <App />
          </TvGenresProvider>
        </TvProvider>
      </GenresProvider>
    </MovieProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
