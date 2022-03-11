import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import eu from '../../images/eu3.jpg';
import git from "../../images/git.svg";
import lin from "../../images/lin.svg";

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

       <div className="left-intro"> 
       <div className="reachdiv"> 
        <h1 className="reachme"> Reach me</h1>

      <div className="links"> 
              <div>
              <a href="https://github.com/brenoMatias" target="blank">
              <img className="gitimg" src={git} alt="github" />
              </a>         
              </div>

              <div>
              <a href="https://www.linkedin.com/in/breno-matiass/" target="blank">
              <img className="gitimg" src={lin} alt="github" />
              </a>           
              </div>

              </div> 
         </div>

        <div className="imgContainer">
          <img src= { eu } alt="" />
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

   <div>

   </div>



    </div>
  );
}


{/* <a href="#portfolio">
<img  className="adown" src="assets/down.png" alt="" />
</a>


<div className="links"> 
<div>
<a href="https://github.com/brenoMatias" target="blank">
<img className="gitimg" src={git} alt="github" />
 </a>         
</div>

<div>
<a href="https://www.linkedin.com/in/breno-matiass/" target="blank">
<img className="gitimg" src={lin} alt="github" />
 </a>           
</div>
</div>   */}