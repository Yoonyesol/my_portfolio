import Home from "./pages/Home";
import Archiving from "./pages/Archiving";
import Skills from "./pages/Skills";

import "./App.css";
import Project from "./pages/Project";
import Edu from "./pages/Edu";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <Archiving />
      <Skills />
      <Project />
      <Edu />
      <Contact />
    </div>
  );
}

export default App;
