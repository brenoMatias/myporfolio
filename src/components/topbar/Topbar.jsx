import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
// import GitHubIcon from '@mui/icons-material/GitHub';
// aplicação dos hooks = menuOpen, setMenuOpen
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
            {/* <GitHubIcon className="icon" /> */}
            <span>matiasbreno19@gmail.com</span>

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