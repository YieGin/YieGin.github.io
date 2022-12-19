import React, { useEffect, useRef, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import "./styles/LandingPageMid.scss";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Image3 from "../../Images/4.png";
import Image5 from "../../Images/5.png";
import Image6 from "../../Images/6.png";
import Image7 from "../../Images/7.png";
import Image8 from "../../Images/8.png";
import Image9 from "../../Images/9.png";

const LandingPageMid = () => {
  const textScrollVariantss = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

  const controls10 = useAnimation();
  const [ref10, inView10] = useInView();

  const controls11 = useAnimation();
  const [ref11, inView11] = useInView();

  const controls12 = useAnimation();
  const [ref12, inView12] = useInView();

  const controls13 = useAnimation();
  const [ref13, inView13] = useInView();

  const controls14 = useAnimation();
  const [ref14, inView14] = useInView();

  useEffect(() => {
    if (inView10) {
      controls10.start("visible");
    }
  }, [controls10, inView10]);

  useEffect(() => {
    if (inView11) {
      controls11.start("visible");
    }
  }, [controls11, inView11]);

  useEffect(() => {
    if (inView12) {
      controls12.start("visible");
    }
  }, [controls12, inView12]);

  useEffect(() => {
    if (inView13) {
      controls13.start("visible");
    }
  }, [controls13, inView13]);

  useEffect(() => {
    if (inView14) {
      controls14.start("visible");
    }
  }, [controls14, inView14]);

  return (
    <div className="Container_mid">
      <div className="Container_mid1">
        <h2 id="case">CASE STUDIES</h2>
        <div class="btn-groupmid">
          <a class="btnmid">
            <span className="Spann"></span>
            <span className="Spann"></span>
            <span className="Spann"></span>
            <span className="Spann"></span>
          </a>
          <svg
            className="fillll"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 860.000000 1060.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1060.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M852 10191 l-93 -6 303 -345 c814 -930 2916 -3282 3161 -3538 39 -40
75 -71 82 -68 16 6 161 164 688 749 1203 1337 2837 3179 2837 3198 0 13 -284
19 -890 19 l-635 -1 -640 -715 c-689 -771 -1198 -1337 -1303 -1448 l-65 -70
-36 41 c-20 22 -218 242 -441 489 -697 772 -1351 1510 -1460 1646 l-45 57
-685 -1 c-377 -1 -727 -4 -778 -7z"
              />
              <path
                d="M828 7283 c-32 -2 -58 -7 -58 -11 1 -35 3372 -3816 3517 -3945 20
-17 21 -17 59 26 22 24 163 180 314 348 775 855 2703 3024 3080 3464 l94 110
-64 6 c-36 4 -380 7 -765 7 l-700 1 -335 -376 c-1014 -1138 -1657 -1846 -1674
-1840 -32 10 -1531 1674 -1860 2065 l-129 152 -711 -2 c-391 -1 -737 -3 -768
-5z"
              />
              <path
                d="M870 4363 c-41 -2 -79 -8 -84 -13 -4 -4 101 -133 240 -292 897 -1024
3117 -3505 3243 -3622 l31 -30 36 35 c54 50 486 526 919 1009 786 879 2568
2887 2573 2901 2 5 -127 9 -306 9 -170 0 -511 3 -758 6 l-449 6 -290 -328
c-341 -385 -793 -890 -1235 -1379 -423 -468 -480 -529 -490 -533 -25 -9 -1715
1888 -1907 2141 l-74 97 -687 -2 c-378 -1 -721 -4 -762 -5z"
              />
            </g>
          </svg>
        </div>
        <h1> RECENT PROJECTS</h1>
      </div>
      <div className="GapWork">
        <motion.div
          ref={ref10}
          variants={textScrollVariantss}
          initial="hidden"
          className="ImagePage6_text"
          animate={controls10}
        >
          <figure class="snip1401">
            <img className="ImagePage7" src={Image9} alt="" />
            <figcaption className="Figcaption">
              <h1 className="Page6_Text">TOURNAMENT</h1>
              <p className="Page6_Text-Bigger">
                An example of responsive website appealing to high-end customers
                been done for a purpose of skill showcase
              </p>
              <div className="Check_box">
                <div class="btn-group15">
                  <a
                    target="_blank"
                    href="https://yiegin.github.io/lamborghini_2.0/"
                    class="btn15"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    View Website
                  </a>
                </div>
                <a target="_blank" href="https://github.com/YieGin/Tournaments">
                  <div class="btn-group15">
                    <a class="btn15">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Check code
                    </a>
                  </div>
                </a>
              </div>
            </figcaption>
            <i class="ion-ios-home-outline"></i>
          </figure>
        </motion.div>
        <motion.div
          ref={ref10}
          variants={textScrollVariantss}
          initial="hidden"
          className="ImagePage6_text"
          animate={controls10}
        >
          <figure class="snip1401">
            <img className="ImagePage7" src={Image8} alt="" />
            <figcaption className="Figcaption">
              <h1 className="Page6_Text">LAMBORGHINI</h1>
              <h4 className="Clone">CLONE</h4>
              <p className="Page6_Text-Bigger">
                An example of responsive website appealing to high-end customers
                been done for a purpose of skill showcase
              </p>
              <div className="Check_box">
                <div class="btn-group15">
                  <a
                    target="_blank"
                    href="https://yiegin.github.io/lamborghini_2.0/"
                    class="btn15"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    View Website
                  </a>
                </div>
                <a
                  target="_blank"
                  href="https://github.com/YieGin/lamborghini_2.0"
                >
                  <div class="btn-group15">
                    <a class="btn15">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Check code
                    </a>
                  </div>
                </a>
              </div>
            </figcaption>
            <i class="ion-ios-home-outline"></i>
          </figure>
        </motion.div>
        <motion.div
          ref={ref11}
          variants={textScrollVariantss}
          initial="hidden"
          className="ImagePage6_text2"
          animate={controls11}
        >
          <figure class="snip1401">
            <img className="ImagePage7" src={Image3} alt="" />
            <figcaption className="Figcaption">
              <h1 className="Page6_Text">SUPER DRY</h1>
              <h4 className="Clone">CLONE</h4>
              <p className="Page6_Text-Bigger">
                An example of responsive website appealing to high-end customers
                been done for a purpose of skill showcase
              </p>
              <div className="Check_box">
                <div class="btn-group15">
                  <a
                    target="_blank"
                    href="https://yiegin.github.io/shopping-Website/"
                    class="btn15"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    View Website
                  </a>
                </div>
                <a
                  target="_blank"
                  href="https://github.com/YieGin/shopping-Website"
                >
                  <div class="btn-group15">
                    <a class="btn15">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Check code
                    </a>
                  </div>
                </a>
              </div>
            </figcaption>
            <i class="ion-ios-home-outline"></i>
          </figure>
        </motion.div>
        <motion.div
          ref={ref12}
          variants={textScrollVariantss}
          initial="hidden"
          className="ImagePage6_text"
          animate={controls12}
        >
          <figure class="snip1401">
            <img className="ImagePage7" src={Image5} alt="" />
            <figcaption className="Figcaption">
              <h1 className="Page6_Text">TWITCH</h1>
              <h4 className="Clone">CLONE</h4>
              <p className="Page6_Text-Bigger">
                Due to technical limitations of GitHub pages, this example site
                is working partially, you may check the code to see work done by
                me
              </p>
              <div className="Check_box">
                <div class="btn-group15">
                  <a
                    target="_blank"
                    href="https://yiegin.github.io/Twitch_2.0/"
                    class="btn15"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    View Website
                  </a>
                </div>
                <a target="_blank" href="https://github.com/YieGin/Twitch_2.0">
                  <div class="btn-group15">
                    <a class="btn15">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Check code
                    </a>
                  </div>
                </a>
              </div>
            </figcaption>
            <i class="ion-ios-home-outline"></i>
          </figure>
        </motion.div>
        <motion.div
          ref={ref13}
          variants={textScrollVariantss}
          initial="hidden"
          className="ImagePage6_text2"
          animate={controls13}
        >
          <figure class="snip1401">
            <img className="ImagePage7" src={Image6} alt="" />
            <figcaption className="Figcaption">
              <h1 className="Page6_Text">COSMETICS SHOP</h1>
              <h4 className="Clone">CLONE</h4>
              <p className="Page6_Text-Bigger">
                An example of responsive website appealing to high-end customers
                been done for a purpose of skill showcase
              </p>
              <div className="Check_box">
                <div class="btn-group15">
                  <a
                    target="_blank"
                    href="https://yiegin.github.io/Shopping-website_2/"
                    class="btn15"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    View Website
                  </a>
                </div>
                <a
                  target="_blank"
                  href="https://github.com/YieGin/Shopping-website_2"
                >
                  <div class="btn-group15">
                    <a class="btn15">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Check code
                    </a>
                  </div>
                </a>
              </div>
            </figcaption>
            <i class="ion-ios-home-outline"></i>
          </figure>
        </motion.div>
        <motion.div
          ref={ref14}
          variants={textScrollVariantss}
          initial="hidden"
          className="ImagePage6_text"
          animate={controls14}
        >
          <figure class="snip1401">
            <img className="ImagePage7" src={Image7} alt="" />
            <figcaption className="Figcaption">
              <h1 className="Page6_Text">INSTAGRAM</h1>
              <h4 className="Clone">CLONE</h4>
              <p className="Page6_Text-Bigger">
                An example of responsive website appealing to high-end customers
                been done for a purpose of skill showcase
              </p>
              <div className="Check_box">
                <div class="btn-group15">
                  <a
                    target="_blank"
                    href="https://yiegin.github.io/Instagram-_2.0/"
                    class="btn15"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    View Website
                  </a>
                </div>
                <a
                  target="_blank"
                  href="https://github.com/YieGin/Instagram-_2.0"
                >
                  <div class="btn-group15">
                    <a class="btn15">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Check code
                    </a>
                  </div>
                </a>
              </div>
            </figcaption>
            <i class="ion-ios-home-outline"></i>
          </figure>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPageMid;
