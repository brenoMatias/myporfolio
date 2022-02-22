import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import git from "../../images/git.svg";
import lin from "../../images/lin.svg";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (

   //  topbar " + (menuOpen && "active") aplicação de transformação do burger menu
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Breno Matias
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+55 31 998264500</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>matiasbreno19@gmail.com</span>
          </div>

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
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

//onClick={()=>setMenuOpen(!menuOpen) no click desativa o menu burger (!menuOpen)