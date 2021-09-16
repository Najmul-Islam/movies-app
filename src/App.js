import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MoviesPage from "./pages/Movies/MoviesPage";
import SingleMoviePage from "./pages/Movies/SingleMoviePage";
import TvSeriesPage from "./pages/TvSeries/TvSeriesPage";
import SeasonsPage from "./pages/TvSeries/SeasonsPage";
import EpisodesPage from "./pages/TvSeries/EpisodesPage";
import BlogPage from "./pages/Blog/BlogPage";
import About from "./pages/Others/About";
import ContactUs from "./pages/Others/ContactUs";
import PrivacyPolicy from "./pages/Others/PrivacyPolicy";
import TermsCondition from "./pages/Others/TermsCondition";
import NotFound from "./pages/Others/NotFound";
import Header from "./components/common/header";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/movie/:_id" component={SingleMoviePage} />
        <Route exact path="/tv-series" component={TvSeriesPage} />
        <Route exact path="/tv-series/:id" component={SeasonsPage} />
        <Route exact path="/tv-series/seasson/:id" component={EpisodesPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/tarms-condition" component={TermsCondition} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
