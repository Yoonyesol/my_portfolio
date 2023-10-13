import Home from "./pages/Home";
import Archiving from "./pages/Archiving";
import Skills from "./pages/Skills";

import "./App.css";
import Project from "./pages/Project";
import Edu from "./pages/Edu";
import Contact from "./pages/Contact";
import MenuBar from "./components/MenuBar";
import { useRef } from "react";

function App() {
  const HomeRef = useRef(null);
  const ArchivingRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const EduRef = useRef(null);
  const ContactRef = useRef(null);

  const moveToHomeHandler = () => {
    HomeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToArcHandler = () => {
    ArchivingRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToSkillsHandler = () => {
    SkillsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToProjectHandler = () => {
    ProjectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToEduHandler = () => {
    EduRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToContactHandler = () => {
    ContactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <MenuBar
        moveToHome={moveToHomeHandler}
        moveToArc={moveToArcHandler}
        moveToSkill={moveToSkillsHandler}
        moveToPrj={moveToProjectHandler}
        moveToEdu={moveToEduHandler}
        moveToContact={moveToContactHandler}
      />
      <Home ref={HomeRef} moveToArc={moveToArcHandler} />
      <Archiving ref={ArchivingRef} />
      <Skills ref={SkillsRef} />
      <Project ref={ProjectRef} />
      <Edu ref={EduRef} />
      <Contact ref={ContactRef} />
    </div>
  );
}

export default App;
