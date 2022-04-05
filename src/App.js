import React from "react";
import { Routes, Route } from "react-router-dom";
// Movies Route
import MoviesLayout from "./client/Layouts/MoviesLayout";
import MoviesPage from "./client/pages/MoviesPage";
import SingleMoviePage from "./client/pages/SingleMoviePage";
import SearchMoviesPage from "./client/pages/SearchMoviesPage";
// Genres Route
import GenresPage from "./client/pages/GenresPage";
// Tv seasons Route
import TvLayout from "./client/Layouts/TvLayout";
import TvSeasonsPage from "./client/pages/TvSeasonsPage";
import EpisodesPage from "./client/pages/EpisodesPage";
import SingleEpisodePage from "./client/pages/SingleEpisodePage";
import TvGenresPage from "./client/pages/TvGenresPage";
// Blog Route
import BlogPage from "./client/pages/BlogPage";
// Home
import HomeLayout from "./client/Layouts/HomeLayout";
import HomePage from "./client/pages/HomePage";
// Others Route
import About from "./client/pages/About";
import ContactUs from "./client/pages/ContactUs";
import PrivacyPolicy from "./client/pages/PrivacyPolicy";
import TermsCondition from "./client/pages/TermsCondition";
import NotFound from "./client/pages/NotFound";

import Header from "./client/components/header/Header";
import Footer from "./client/components/common/Footer";

// admin routes
import AdminLayout from "./admin/layouts/AdminLayout";
import AdminHomeScreen from "./admin/screens/home/HomeScreen";
// posts
import AllPostsScreen from "./admin/screens/posts/AllPostsScreen";
import AddPostScreen from "./admin/screens/posts/AddPostScreen";
import CategoriesScreen from "./admin/screens/posts/CategoriesScreen";
import TagsScreen from "./admin/screens/posts/TagsScreen";
// media
import LibraryScreen from "./admin/screens/media/LibraryScreen";
import AddLibraryScreen from "./admin/screens/media/AddLibraryScreen";
// comments
import CommentsScreen from "./admin/screens/comments/CommentsScreen";
// users
import AllUsersScreen from "./admin/screens/users/AllUsersScreen";
import AddUserScreen from "./admin/screens/users/AddUserScreen";
import ProfileScreen from "./admin/screens/users/ProfileScreen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/movies" element={<MoviesLayout />}>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/search" element={<SearchMoviesPage />} />
          <Route path="/movies/genres/:genre" element={<GenresPage />} />
        </Route>
        <Route path="/movies/:_id" element={<SingleMoviePage />} />
        <Route path="/tv-series" element={<TvLayout />}>
          <Route path="/tv-series" element={<TvSeasonsPage />} />
          <Route path="/tv-series/genres/:genre" element={<TvGenresPage />} />
        </Route>
        <Route path="/tv-series/:_id" element={<EpisodesPage />} />
        <Route path="/tv-series/episode/:_id" element={<SingleEpisodePage />} />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/tarms-condition" element={<TermsCondition />} />
        <Route path="/*" element={<NotFound />} />
        {/* admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHomeScreen />} />
          {/* post */}
          <Route path="/admin/post/all-posts" element={<AllPostsScreen />} />
          <Route path="/admin/post/add-new" element={<AddPostScreen />} />
          <Route path="/admin/post/categories" element={<CategoriesScreen />} />
          <Route path="/admin/post/tags" element={<TagsScreen />} />
          {/* media */}
          <Route path="/admin/media/library" element={<LibraryScreen />} />
          <Route path="/admin/media/add-new" element={<AddLibraryScreen />} />
          {/* comments */}
          <Route path="/admin/comments" element={<CommentsScreen />} />
          {/* users */}
          <Route path="/admin/users/all-users" element={<AllUsersScreen />} />
          <Route path="/admin/users/add-new" element={<AddUserScreen />} />
          <Route path="/admin/users/profile" element={<ProfileScreen />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
