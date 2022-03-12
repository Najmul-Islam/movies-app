import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// Movies Route
import MoviesLayout from "./Layouts/MoviesLayout";
import MoviesPage from "./pages/MoviesPage";
import SingleMoviePage from "./pages/SingleMoviePage";
// Genres Route
import GenresPage from "./pages/GenresPage";
// Tv seasons Route
import TvSeasonsPage from "./pages/TvSeasonsPage";
import EpisodesPage from "./pages/EpisodesPage";
import SingleEpisodePage from "./pages/SingleEpisodePage";
// Blog Route
import BlogPage from "./pages/BlogPage";
// Others Route
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import NotFound from "./pages/NotFound";

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
