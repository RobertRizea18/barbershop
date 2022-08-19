import React from "react";
import "./about.css";
import "animate.css";
import Form from "../components/form/form";
import TeamCards from "../components/team-cards/team-cards";

const About = () => {
  return (
    <div>
      
      <div className="programming-form">
      <span className="about-us-description  animate__animated animate__fadeInDown">
          {" "}
          Misiunea noastra este sa oferim servicii de inalta calitate, combinate
          cu produse de acelasi grad. Ne dorim sa ajungem lideri de piata, prin
          aptitudinile si experienta frizerilor nostri, care folosesc tehnici
          vechi, precum pierdutul exclusiv din foarfeca, dar si prin tehnici
          moderne.
        </span>
        <Form />
        
      </div>
      <div className="our-team ">Echipa noastra</div>
      <div className="team-cards">
        <TeamCards />
      </div>
    </div>
  );
};

export default About;
