import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useAnimation, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./styles/LandingPage.scss";
const About = () => {
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

  const textScrollVariantss = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

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

  const controls15 = useAnimation();
  const [ref15, inView15] = useInView();

  const controls16 = useAnimation();
  const [ref16, inView16] = useInView();

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
    if (inView15) {
      controls15.start("visible");
    }
  }, [controls15, inView15]);

  useEffect(() => {
    if (inView16) {
      controls16.start("visible");
    }
  }, [controls16, inView16]);

  return (
    <div>
      <div className="About">
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
                  I'M <span className="spannn">BELAMRI ISLAM </span> , AN
                  EXPERIENCED FRONT-END DEVELOPER FROM ALGERIA. I'M PASSIONATE
                  ABOUT CREATING INTRICATE DESIGN USING HTML & CSS AS WELL AS
                  POWERING MY WEBSITES WITH REACT FOR OVER 7 MONTHS. I ENJOY
                  SOLVING DESIGN PROBLEMS BY UTILIZING MY CREATIVITY IN SIMPLE,
                  YET ELEGANT SOLUTIONS THAT ENHANCE THE USER'S EXPERIENCE. THE
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
          ref={ref7}
          variants={textScrollVariants}
          initial="hidden"
          className="About_left"
          animate={controls7}
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
                        Currently, I am searching for new career opportunities.
                        If you have any questions or would like to just say
                        hello, please do not hesitate to contact me and I will
                        do my best to respond as soon as possible.
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
                          ref={ref15}
                          variants={textScrollVariantss}
                          initial="hidden"
                          className="Sent_input"
                          animate={controls15}
                        >
                          Your email has been sent
                        </motion.div>
                      )}
                      {sentError && (
                        <motion.div
                          ref={ref16}
                          variants={textScrollVariantss}
                          initial="hidden"
                          className="Sent_input"
                          animate={controls16}
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
    </div>
  );
};

export default About;
