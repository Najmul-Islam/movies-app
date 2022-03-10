import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// Movies Route
import MoviesLayout from "./Layouts/MoviesLayout";
import MoviesPage from "./pages/Movies/MoviesPage";
import SingleMoviePage from "./pages/Movies/SingleMoviePage";
// Genres Route
import GenresPage from "./pages/genres/GenresPage";
// Tv seasons Route
import TvSeasonsPage from "./pages/TvSeries/TvSeasonsPage";
import EpisodesPage from "./pages/TvSeries/EpisodesPage";
import SingleEpisodePage from "./pages/TvSeries/SingleEpisodePage";
// Blog Route
import BlogPage from "./pages/Blog/BlogPage";
// Others Route
import About from "./pages/Others/About";
import ContactUs from "./pages/Others/ContactUs";
import PrivacyPolicy from "./pages/Others/PrivacyPolicy";
import TermsCondition from "./pages/Others/TermsCondition";
import NotFound from "./pages/Others/NotFound";

import Header from "./components/header/Header";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesLayout />}>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/genres/:genre" element={<GenresPage />} />
        </Route>
        <Route path="/movies/:_id" element={<SingleMoviePage />} />
        <Route path="/tv-series" element={<TvSeasonsPage />} />
        <Route path="/tv-series/:_id" element={<EpisodesPage />} />
        <Route path="/tv-series/episode/:_id" element={<SingleEpisodePage />} />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/tarms-condition" element={<TermsCondition />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
