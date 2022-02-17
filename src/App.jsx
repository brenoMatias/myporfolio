import Intro from "./components/intro/Intro";
import "./app.scss"
import { useState } from "react";

function App() {
  // const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <div className="sections">
       <Intro/>
     </div>
    </div>
  );
}

export default App;