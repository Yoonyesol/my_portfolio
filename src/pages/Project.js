import { forwardRef, useState } from "react";
import Card from "../components/Card";
import "./Project.css";
import { projectItems } from "../components/ProjectItems";

const Project = forwardRef((props, ref) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectItems.length - 1 : prevIndex - 1
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container project" ref={ref}>
      <h1 className="main-title">Project</h1>
      <div className="project-card-wrapper">
        <div className="slide">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/left01.png"}
            onClick={handlePrevProject}
          />
        </div>
        <Card className="project-card">
          <div className="project-order">
            {currentProjectIndex + 1} / {projectItems.length}
          </div>
          <h2 className="project-title">
            {projectItems[currentProjectIndex].title}
          </h2>
          <h4>개인 프로젝트</h4>
          <section>
            <article className="info-article">
              <img
                src={projectItems[currentProjectIndex].imageUrl}
                alt={projectItems[currentProjectIndex].title}
              />
              <p className="link-wrapper">Github</p>
              <a href={projectItems[currentProjectIndex].githubLink}>
                {projectItems[currentProjectIndex].title}
              </a>
              <p className="link-wrapper">배포 링크</p>
              <a href={projectItems[currentProjectIndex].deployLink}>
                {projectItems[currentProjectIndex].deployLink}
              </a>
              <p className="link-wrapper">개발 기록</p>
              <a href={projectItems[currentProjectIndex].blogLink}>
                {projectItems[currentProjectIndex].blogLink}
              </a>
            </article>
            <article>
              <h3>프로젝트 소개</h3>
              <p>{projectItems[currentProjectIndex].description}</p>
              <h3>주요 기능</h3>
              <p>{projectItems[currentProjectIndex].features}</p>
              <h3>회고</h3>
              <p>{projectItems[currentProjectIndex].retrospective}</p>
              <h3>기술스택</h3>
              <p>{projectItems[currentProjectIndex].techStack}</p>
            </article>
          </section>
        </Card>
        <div className="slide">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/right01.png"}
            onClick={handleNextProject}
          />
        </div>
      </div>
    </div>
  );
});

export default Project;
