import React from "react";
import Movies from "../components/movies/Movies";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="border__right">
        <Movies />
      </div>
    </div>
  );
};

export default Home;
