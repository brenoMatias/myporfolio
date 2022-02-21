import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Topbar from "./components/topbar/Topbar";


import "./app.scss"
import { useState } from "react";

function App() {
  return (
    <div className="app">
     <div className="sections">
      <Topbar/>

    
     </div>
    </div>
  );
}

export default App;