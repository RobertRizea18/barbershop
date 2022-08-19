import React from "react";
import "./home.css";
import { BsScissors } from "react-icons/bs";
import "animate.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { MdOutlineEditCalendar } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="home">
        <p className="description animate__animated animate__fadeInDown ">
          O atmosfera de neuitat!<br></br>
          Va asteptam in locatia noastra pentru cele mai moderne tunsori
          <BsScissors />
        </p>

        <div className="icons">
          <span className="facebook">
            <a href="https://www.facebook.com/">
              <BsFacebook className="facebook animate__animated animate__fadeInDown animate__delay-1s" />
            </a>
          </span>
          <span className="wapp">
            <BsWhatsapp className="wapp animate__animated animate__fadeInDown animate__delay-1s" />
          </span>
          <span className="instagram">
            <a href="https://www.instagram.com/">
              <BsInstagram className="instagram animate__animated animate__fadeInDown animate__delay-1s" />
            </a>
          </span>
          <span className="programare-online ">
            <a href="http://localhost:3000/about">
              <MdOutlineEditCalendar className=" programare-online animate__animated animate__fadeInDown  animate__delay-1s" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
