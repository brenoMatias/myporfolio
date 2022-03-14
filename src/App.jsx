import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Topbar from "./components/topbar/Topbar"
import Portfolio from "./components/portfolio/Porftolio";
import "./app.scss";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";


import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false) // HOOKS
  // set burger Menu
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

     <div className="sections">
       <Intro />
      <Portfolio/>
      <Works />
      <Contact />

    
     </div>
    </div>
  );
}

export default App;

// 35:05