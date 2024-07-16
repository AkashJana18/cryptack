import React from "react";
import "./style.css";
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MainComponent() {
  return (
    <div className="main-flex">
      <div className="left-component">
        <div>
          <motion.h1
            className="heading1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Track Crypto
          </motion.h1>
          <motion.h1
            className="heading2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            Real Time.
          </motion.h1>
          <motion.p
            className="info-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Track crypto through a public api in real time. Visit the dashboard
            to do so!
          </motion.p>
          <motion.div
            className="btn-flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <Link to="/dashboard">
                <Button text={"Dashboard"} />
            </Link>
            <Button text={"Share"} outLined={true} />
          </motion.div>
        </div>
      </div>
      <div className="phone-container">
        <motion.img
          className="iphone"
          src={iphone}
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          alt=""
        />
        <img className="gradient" src={gradient} alt="" />
      </div>
    </div>
  );
}

export default MainComponent;
