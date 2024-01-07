import { forwardRef, useState } from "react";
import Card from "../components/Card";
import "./Project.css";
import { projectItems } from "../components/ProjectItems";

const projectImage = [
  { project1: [0, 1, 2, 3, 4] },
  { project2: [0, 1, 2] },
  { project3: [0, 1, 2, 3, 4, 5] },
  { project4: [0, 1, 2, 3, 4] },
];

const Project = forwardRef((props, ref) => {
  const [imgIndexes, setImgIndexes] = useState(
    projectImage.map((project) => 0)
  );

  const handlePrevProject = (index) => {
    setImgIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex, i) => {
        if (i === index && prevIndex === 0) {
          return projectImage[i][`project${i + 1}`].length - 1;
        } else if (i === index) {
          return prevIndex - 1;
        }
        return prevIndex;
      })
    );
  };

  const handleNextProject = (index) => {
    setImgIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex, i) =>
        i === index
          ? prevIndex === projectImage[i][`project${i + 1}`].length - 1
            ? 0
            : prevIndex + 1
          : prevIndex
      )
    );
  };

  const handleDotClick = (index, dotIndex) => {
    setImgIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex, i) => (i === index ? dotIndex : prevIndex))
    );
  };

  return (
    <div className="container project" ref={ref}>
      <h1 className="main-title">Project</h1>
      <div className="project-card-wrapper">
        {projectItems.map((project, index) => {
          return (
            <Card className="project-card" key={index}>
              <h2 className="project-title">{project.title}</h2>
              <h4>{project.category}</h4>
              <div className="project-slider">
                <div
                  className="arrow left"
                  onClick={() => handlePrevProject(index)}
                ></div>
                <div className="img-container">
                  <img
                    src={
                      project.imageUrl[
                        projectImage[index][`project${index + 1}`][
                          imgIndexes[index]
                        ]
                      ]
                    }
                    alt={project.title}
                  />
                </div>
                <div
                  className="arrow right"
                  onClick={() => handleNextProject(index)}
                ></div>
              </div>
              <div className="dot-container">
                {projectImage[index][`project${index + 1}`].map(
                  (item, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`dot ${
                        dotIndex === imgIndexes[index] ? "active" : ""
                      }`}
                      onClick={() => handleDotClick(index, dotIndex)}
                    ></span>
                  )
                )}
              </div>
              <section>
                <article className="info-article">
                  <p className="link-wrapper">Github</p>
                  <a href={project.githubLink}>{project.title}</a>
                  <p className="link-wrapper">배포 링크</p>
                  <a href={project.deployLink}>{project.deployLink}</a>
                  <p className="link-wrapper">개발 기록</p>
                  <a href={project.blogLink}>{project.blogLink}</a>
                </article>
                <article className="detail-article">
                  <h3>프로젝트 소개</h3>
                  <p>{project.description}</p>
                  <h3>주요 기능</h3>
                  <p>{project.features}</p>
                  <h3>기술스택</h3>
                  <p>{project.techStack}</p>
                  <h3>회고</h3>
                  <p>{project.retrospective}</p>
                </article>
              </section>
              <div className="project-order">
                {index + 1} / {projectItems.length}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
});

export default Project;
