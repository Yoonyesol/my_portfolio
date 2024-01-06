import Home from "./pages/Home";
import Archiving from "./pages/Archiving";
import Skills from "./pages/Skills";

import "./App.css";
import Project from "./pages/Project";
import Edu from "./pages/Edu";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { useEffect, useRef, useState } from "react";

function App() {
  const HomeRef = useRef(null);
  const ArchivingRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const EduRef = useRef(null);
  const ContactRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState([]);
  const [selectedPage, setSelectedPage] = useState("");

  const moveToHomeHandler = () => {
    HomeRef.current.scrollIntoView({ behavior: "auto" });
  };
  const moveToArcHandler = () => {
    ArchivingRef.current.scrollIntoView({ behavior: "auto" });
  };
  const moveToSkillsHandler = () => {
    SkillsRef.current.scrollIntoView({ behavior: "auto" });
  };
  const moveToProjectHandler = () => {
    ProjectRef.current.scrollIntoView({ behavior: "auto" });
  };
  const moveToEduHandler = () => {
    EduRef.current.scrollIntoView({ behavior: "auto" });
  };
  const moveToContactHandler = () => {
    ContactRef.current.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: HomeRef, id: "home" },
        { ref: ArchivingRef, id: "archiving" },
        { ref: SkillsRef, id: "skills" },
        { ref: ProjectRef, id: "project" },
        { ref: EduRef, id: "edu" },
        { ref: ContactRef, id: "contact" },
      ];

      const visibleSections = sections
        .filter(({ ref }) => {
          const rect = ref.current.getBoundingClientRect();
          return (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          );
        })
        .map(({ id }) => id);

      setVisibleSections(visibleSections);

      if (visibleSections.length > 0) {
        setSelectedPage(visibleSections[0]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header
        moveToHome={moveToHomeHandler}
        moveToArc={moveToArcHandler}
        moveToSkill={moveToSkillsHandler}
        moveToPrj={moveToProjectHandler}
        moveToEdu={moveToEduHandler}
        moveToContact={moveToContactHandler}
        selectedPage={selectedPage}
      />
      <Home ref={HomeRef} moveToArc={moveToArcHandler} />
      <div
        ref={ArchivingRef}
        className={`section ${
          visibleSections.includes("archiving") && "visible"
        }`}
      >
        <Archiving />
      </div>
      <div
        ref={SkillsRef}
        className={`section ${visibleSections.includes("skills") && "visible"}`}
      >
        <Skills />
      </div>
      <div
        ref={ProjectRef}
        className={`section ${
          visibleSections.includes("project") && "visible"
        }`}
      >
        <Project />
      </div>
      <div
        ref={EduRef}
        className={`section ${visibleSections.includes("edu") && "visible"}`}
      >
        <Edu />
      </div>
      <div
        ref={ContactRef}
        className={`section ${
          visibleSections.includes("contact") && "visible"
        }`}
      >
        <Contact />
      </div>
      <footer>(C) 2023. 윤예솔. All rights reserved.</footer>
    </div>
  );
}

export default App;
