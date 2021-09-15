import React from "react";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./style/footer.css";

const Footer = () => {
  return (
    <div className="footer__bg">
      <div className="container pt-5 border-bottom">
        <div className="row">
          <div className="col-md-5 mb-3 m-md-0">
            {/* <img
              src="images/logo1.png"
              alt="logo"
              className="img-fluid mb-3 w-75"
            /> */}
            <p className="fs-6 fw-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              magni adipisci, veritatis, cumque sit provident aperiam officiis,
              quos eum ipsa labore reiciendis ex optio ab minima illo possimus
              maiores itaque.
            </p>
          </div>
          {/* informaiton */}
          <div className="col-md-3 mb-3 m-md-0">
            <h4 className="mb-3">Information</h4>
            <nav className="nav flex-column ">
              <Link to="/" className="nav-item mb-2 fs-5 footer__nav--link">
                <BiChevronRight className="fs-4" />
                Home
              </Link>

              <Link to="/blog" className="nav-item mb-2 fs-5 footer__nav--link">
                <BiChevronRight className="fs-4" />
                Blog
              </Link>

              <Link
                to="/about"
                className="nav-item mb-2 fs-5 footer__nav--link"
              >
                <BiChevronRight className="fs-4" />
                About
              </Link>
            </nav>
          </div>

          {/* have a question */}
          <div className="col-md-4">
            <h4 className="mb-3">Have a Questions?</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-3 cursor-pointer footer__nav--link">
                <FaMapMarkerAlt />
                <span className="m-3">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li className="nav-item mb-3 cursor-pointer footer__nav--link">
                <FaPhoneAlt />
                <span className="m-2">+2 392 3929 210</span>
              </li>
              <li className="nav-item cursor-pointer footer__nav--link">
                <FaEnvelope />
                <span className="m-2 ">info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <p className="fs-6 fs-md-5 ">
          Copyright ©2021 All rights reserved | This template is made by Najmul
          islam
        </p>
      </div>
    </div>
  );
};

export default Footer;
