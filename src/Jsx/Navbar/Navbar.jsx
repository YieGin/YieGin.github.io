import { useState } from "react";
import "./styles/Navbar.css";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Humberger_mune, setHumberger_mune] = useState(false);

  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };
  const textScrollVariantsright = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView();

  const controls15 = useAnimation();
  const [ref15, inView15] = useInView();

  useEffect(() => {
    if (inView15) {
      controls15.start("visible");
    }
  }, [controls15, inView15]);

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);
  return (
    <motion.div
      ref={ref}
      variants={textScrollVariantsright}
      initial="hidden"
      className="Navbar_main"
      animate={controls}
    >
      <Link to="./">
        <div className="logo"></div>
      </Link>
      <div className="Navbar_right">
        <ul class="menu">
          <li class="li-text">
            <a class="A-text" href="#case">
              WORK
            </a>
          </li>
        </ul>
        <ul class="menu">
          <li class="li-text">
            <a class="A-text" href="#hire">
              HIRE ME
            </a>
          </li>
        </ul>
        <Link to="./About">
          <ul class="menu">
            <li class="li-text">
              <a class="A-text">CONTACT</a>
            </li>
          </ul>
        </Link>
      </div>
      <div
        onClick={() => {
          setHumberger_mune(true);
        }}
        className="Humberger_mune"
      >
        <p className="Humberger_mune_lines"></p>
        <p className="Humberger_mune_lines"></p>
        <p className="Humberger_mune_lines"></p>
      </div>
      {Humberger_mune && (
        <motion.div
          ref={ref1}
          variants={textScrollVariants}
          initial="hidden"
          className="Humberger_open"
          animate={controls1}
        >
          <svg
            onClick={() => {
              setHumberger_mune(false);
            }}
            className="Humberger_svgg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="34"
            height="34"
          >
            <path
              fill-rule="evenodd"
              d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
            ></path>
          </svg>
          <div className="tk-blobbba">
            <div className="qsdsqq"></div>
          </div>
          <div className="Humberger_open1">
            <a href="#case">
              <h1
                onClick={() => {
                  setHumberger_mune(false);
                }}
                className="Text-inside"
              >
                Work
              </h1>
            </a>
            <a href="#hire">
              <h1
                onClick={() => {
                  setHumberger_mune(false);
                }}
                className="Text-inside"
              >
                HIRE ME
              </h1>
            </a>
            <Link to="./About">
              <h1
                onClick={() => {
                  setHumberger_mune(false);
                }}
                className="Text-inside"
              >
                Contact
              </h1>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
