import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Topbar from "./components/topbar/Topbar";


import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <div className="sections">
       <Intro/>
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    
     </div>
    </div>
  );
}

export default App;