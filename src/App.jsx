import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Topbar from "./components/topbar/Topbar"
import Portfolio from "./components/portfolio/Porftolio";
import "./app.scss";
import Works from "./components/works/Works"


import "./app.scss"
import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Topbar/>

     <div className="sections">
       <Intro />
      <Portfolio/>
      <Works />

    
     </div>
    </div>
  );
}

export default App;

// 35:05