import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import NotFound from "./pages/NotFound";
import Header from "./components/header";
import Footer from "./components/Footer";

import { AppProvider } from "./TypeContext";

function App() {
  return (
    <AppProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/series" component={Series} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/tarms-condition" component={TermsCondition} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </AppProvider>
  );
}

export default App;
