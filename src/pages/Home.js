import React from "react";
import Slider from "../components/Slider";
import Movies from "../components/Movies";
import Sidebar from "../components/Sidebar";
import "./styles/home.css";

const Home = () => {
  return (
    // home__row
    // home__movie
    <div className="container-fluid">
      <div className=" border__right">
        <Movies />
      </div>
      {/* <div className="">
      </div> */}
    </div>
  );
};

export default Home;
