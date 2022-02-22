import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: [" Web Developer", "Front End", "Back End"],
    });
  }, []); // text animation

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Breno Matias</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img  className="adown" src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}