import React from "react";
import Headroom from "react-headroom";
import Navbar from "./Navbar";
import Category from "./category";
import "./styles/header.css";

const Header = () => {
  return (
    <Headroom className="bg__dark">
      <div className="">
        <Navbar />
      </div>
      <div className="d-md-none">
        <Category />
      </div>
    </Headroom>
  );
};

export default Header;
