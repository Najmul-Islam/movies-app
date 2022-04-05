import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// context api
import { MovieProvider } from "./client/context/MoviesContext";
import { GenresProvider } from "./client/context/GenresContext";
import { TvProvider } from "./client/context/TvContext";
import { TvGenresProvider } from "./client/context/TvGenresContext";

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
