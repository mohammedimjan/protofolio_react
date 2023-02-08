import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All These</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quo
          <br />
          incidunt nobis, asperiores vero itaque.
          <br />
          incidunt asperiores vero nobis, asperiores vero itaque.
          <br />
          incidunt asperiores vero nobis.
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-main-circle"
        >
          <div className="w-sec-circle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        <div className="w-background-circle blue-circle"></div>
        <div className="w-background-circle yellow-circle"></div>
      </div>
    </div>
  );
};

export default Works;
