import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles/LandingPage.scss";
import Image1 from "../../Images/1.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import LandingPageMid from "./LandingPageMid";
import Footer from "../Footer/Footer";
import Aboutt from "./About";

const LandingPage = () => {
  const [sent, setSent] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [sentError, setSentError] = useState(false);

  const [send, setsend] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (userEmail === "" || userName === "" || userMessage === "") {
      setSentError(true);
      return;
    }

    emailjs
      .sendForm(
        "service_a5rh5xh",
        "template_vz0ss37",
        form.current,
        "pTcETt4XvK4M7IYQv"
      )
      .then(
        (result) => {
          console.log(result);
          e.target.reset();
          setSentError(false);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          setSentError(true);
        }
      );
  };

  const [About, setAbout] = useState(false);
  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };
  const textScrollVariantsright = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView();

  const controls4 = useAnimation();
  const [ref4, inView4] = useInView();

  const controls5 = useAnimation();
  const [ref5, inView5] = useInView();

  const controls6 = useAnimation();
  const [ref6, inView6] = useInView();

  const controls7 = useAnimation();
  const [ref7, inView7] = useInView();

  const controls8 = useAnimation();
  const [ref8, inView8] = useInView();

  const controls9 = useAnimation();
  const [ref9, inView9] = useInView();

  const controls10 = useAnimation();
  const [ref10, inView10] = useInView();

  const controls11 = useAnimation();
  const [ref11, inView11] = useInView();

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    }
  }, [controls4, inView4]);

  useEffect(() => {
    if (inView5) {
      controls5.start("visible");
    }
  }, [controls5, inView5]);

  useEffect(() => {
    if (inView6) {
      controls6.start("visible");
    }
  }, [controls6, inView6]);

  useEffect(() => {
    if (inView7) {
      controls7.start("visible");
    }
  }, [controls7, inView7]);

  useEffect(() => {
    if (inView8) {
      controls8.start("visible");
    }
  }, [controls8, inView8]);

  useEffect(() => {
    if (inView9) {
      controls9.start("visible");
    }
  }, [controls9, inView9]);

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

  return (
    <>
      <div className="LandingPage_main">
        <motion.div
          ref={ref5}
          variants={textScrollVariants}
          initial="hidden"
          className="LandingPage_1"
          animate={controls5}
        >
          <img className="Image1" src={Image1} alt="" />
          <div className="LandingPage_2">
            <div className="content">
              <h1>Belamri Islam</h1>
            </div>
            <p>Front-end Developer</p>
            <Link to="./About">
              <div
                onClick={() => {
                  setAbout(true);
                }}
                class="btn-group6"
              >
                <a class="btn6">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  About me
                </a>
              </div>
            </Link>
          </div>
          <motion.div
            ref={ref3}
            variants={textScrollVariants}
            initial="hidden"
            className="Svg"
            animate={controls3}
          >
            <div className="SOCIAL_row">
              <a id="rotate"> SOCIALS </a>
            </div>
            <div class="btn-groupmid">
              <a target="_blank" class="btnmidd">
                <span className="Spann"></span>
                <span className="Spann"></span>
                <span className="Spann"></span>
                <span className="Spann"></span>
              </a>
              <svg
                className="filll"
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
              <a target="_blank" href="https://www.instagram.com/belamri_yie/">
                <svg
                  className="fill"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 50"
                >
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg>
              </a>
            </div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/islam-puma-b59b17243/"
            >
              <svg
                className="fill"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
              >
                <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
              </svg>
            </a>
            <a target="_blank" href="https://github.com/YieGin">
              <svg
                className="fill_github"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 72 72"
              >
                <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
              </svg>
            </a>
            <a target="_blank" href="https://www.facebook.com/islam.bba.182/">
              <svg
                className="fill"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <LandingPageMid />
      <div className="Experiments_div">
        <div class="btn-groupmid">
          <a target="_blank" class="btnmid">
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
        <div class="waviy">
          <h1 id="hire" style={{ float: "--i:2" }}>
            Hire me
          </h1>
        </div>
      </div>

      <div>
        <div className="Aboutt">
          <motion.div
            ref={ref6}
            variants={textScrollVariants}
            initial="hidden"
            className="About_left"
            animate={controls6}
          >
            <div class="btn-group4">
              <a class="btn4">
                <span className="Spann"></span>
                <span className="Spann"></span>
                <span className="Spann"></span>
                <span className="Spann"></span>
                <div className="About_left_div">
                  <h1>About Me.</h1>
                  <h5> Front-end developer</h5>
                  <p>
                    I'M <span className="spannn">BELAMRI ISLAM</span>, AN
                    EXPERIENCED FRONT-END DEVELOPER FROM ALGERIA. I'M PASSIONATE
                    ABOUT CREATING INTRICATE DESIGN USING HTML / HTML5 & CSS AS
                    WELL AS POWERING MY WEBSITES WITH JAVASCRIPT / REACT FOR
                    OVER 1 YEAR, I ELSE KNOW SOME OF TYPESCRIPT. I ENJOY SOLVING
                    DESIGN PROBLEMS BY UTILIZING MY CREATIVITY IN SIMPLE, YET
                    ELEGANT SOLUTIONS THAT ENHANCE THE USER'S EXPERIENCE. THE
                    CHALLENGE OF CREATING DESIGNS IS SOMETHING THAT I GENUINELY
                    ENJOY. AND OF COURSE, I AM INCREDIBLY
                    <span className="spannn"> COMPETITIVE</span> AND DRIVEN AT
                    WORK AND IN MY PERSONAL LIFE.
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            ref={ref11}
            variants={textScrollVariants}
            initial="hidden"
            className="About_right"
            animate={controls11}
          >
            <div class="btn-group4">
              <a class="btn4">
                <span className="Spann"></span>
                <span className="Spann"></span>
                <span className="Spann"></span>
                <span className="Spann"></span>
                <>
                  <div className="Main_email">
                    <form className="Form" ref={form} onSubmit={sendEmail}>
                      <div className="Emailtext">
                        <h1>Get In Touch</h1>
                        <p>
                          Currently, I am searching for new career
                          opportunities. If you have any questions or would like
                          to just say hello, please do not hesitate to contact
                          me and I will do my best to respond as soon as
                          possible.
                        </p>
                      </div>
                      <div class="btn-group10">
                        <p>Name</p>
                        <a class="btn10">
                          <span className="Spann"></span>
                          <span className="Spann"></span>
                          <span className="Spann"></span>
                          <span className="Spann"></span>
                          <input
                            className="Inputt"
                            type="text"
                            name="user_name"
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </a>
                      </div>
                      <div class="btn-group10">
                        <p>Email</p>
                        <a class="btn10">
                          <span className="Spann"></span>
                          <span className="Spann"></span>
                          <span className="Spann"></span>
                          <span className="Spann"></span>
                          <input
                            className="Inputt"
                            type="email"
                            name="user_email"
                            onChange={(e) => setUserEmail(e.target.value)}
                          />
                        </a>
                      </div>
                      <div class="btn-group11">
                        <p>Message</p>
                        <a class="btn11">
                          <span className="Spann"></span>
                          <span className="Spann"></span>
                          <span className="Spann"></span>
                          <span className="Spann"></span>
                          <textarea
                            className="messagees"
                            name="message"
                            onChange={(e) => setUserMessage(e.target.value)}
                          />
                        </a>
                      </div>
                      <div class="button_container">
                        <input
                          className="btn"
                          onClick={() => {
                            setsend(true);
                          }}
                          type="submit"
                          value="Send"
                        />
                        {sent && (
                          <motion.div
                            ref={ref8}
                            variants={textScrollVariantsright}
                            initial="hidden"
                            className="Sent_input"
                            animate={controls8}
                          >
                            Your email has been sent
                          </motion.div>
                        )}
                        {sentError && (
                          <motion.div
                            ref={ref10}
                            variants={textScrollVariantsright}
                            initial="hidden"
                            className="Sent_input"
                            animate={controls10}
                          >
                            Something went wrong
                          </motion.div>
                        )}
                      </div>
                    </form>
                  </div>
                </>
              </a>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
