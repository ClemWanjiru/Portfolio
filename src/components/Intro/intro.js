import React from "react";
import "./intro.css";
import bg from "../../assests/onlaptop.png";

import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          {" "}
          I'm <span className="introName"> Clementine Wanjiru </span>
          <br />
          <span className="introTech">Software Developer/ui ux designer</span>
          <p className="introPara">
            I am a skilled 20 year developer with experience of creating
            visually appealing and userfriendly systems.
          </p>
        </span>
        <Link>
        <button className="btn"> <span classname="btnText">HIRE ME</span></button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
