import React from "react";
import "./styles/Footer.css";
const Footer = () => {
  return (
    <div className="Footer_main">
      <div className="Footer1">
        <ul class="menu">
          <li class="li-text">
            <a
              target="_blank"
              class="A-text"
              href="https://www.instagram.com/belamri_yie/"
            >
              INSTAGRAM
            </a>
          </li>
        </ul>
        <ul class="menu">
          <li class="li-text">
            <a
              target="_blank"
              class="A-text"
              href="https://www.linkedin.com/in/islam-puma-b59b17243/"
            >
              LINKEDIN
            </a>
          </li>
        </ul>
        <ul class="menu">
          <li class="li-text">
            <a target="_blank" class="A-text" href="https://github.com/YieGin">
              GITHUB
            </a>
          </li>
        </ul>
        <ul class="menu">
          <li class="li-text">
            <a target="_blank" class="A-text" href="https://codepen.io/yiegin">
              CODEPEN
            </a>
          </li>
        </ul>
      </div>
      <h3>© Copyright 2022 – Yie. All Rights Reserved.</h3>
    </div>
  );
};

export default Footer;
