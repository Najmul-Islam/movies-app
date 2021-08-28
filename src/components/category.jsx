import React, { useRef, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles/catergory.css";

const categores = [
  "Current Affairrrs",
  "History & Culture",
  "Environment & Wildlife",
  "Identities",
  "Travel",
  "Health & wellbeing",
  "Economy",
  "Art",
  "Health & wellbeing",
  "Economy",
  "Art",
  "Health & wellbeing",
  "Economy",
  "Art",
];

const Category = () => {
  const options = {
    responsiveClass: true,
    nav: true,
    autoplay: false,
    autoWidth: true,
    margin: 10,
    dots: false,
    navText: [
      `<i class="bi bi-chevron-left prev-btn" aria-hidden="true"></i>`,
      `<i class="bi bi-chevron-right next-btn" aria-hidden="true"></i>`,
    ],
    smartSpeed: 500,
  };

  return (
    <div className="bg__dark border__bottom mx-4 cursor__pointer">
      <OwlCarousel {...options} className="owl-container container-fluid">
        {categores.map((category) => (
          <span className="item text__primery category">{category}</span>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Category;
