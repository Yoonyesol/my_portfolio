import { forwardRef } from "react";
import Card from "../components/Card";
import "./Skills.css";

const Skills = forwardRef((props, ref) => {
  return (
    <div className="skills" ref={ref}>
      <h1 className="skills-title">Tech Skills</h1>
      <div className="skill-card-wrapper">
        <Card className="frontend-card">
          <h2 className="frontend-title">Frontend</h2>
          <div className="skill-img-wrapper">
            <div className="skill-div">
              <img src={process.env.PUBLIC_URL + "assets/images/html.png"} />
              <p>HTML5</p>
            </div>
            <div className="skill-div">
              <img src={process.env.PUBLIC_URL + "assets/images/css.png"} />
              <p>CSS3</p>
            </div>
            <div className="skill-div">
              <img src={process.env.PUBLIC_URL + "assets/images/js.png"} />
              <p>JAVASCRIPT</p>
            </div>
            <div className="skill-div">
              <img src={process.env.PUBLIC_URL + "assets/images/react.png"} />
              <p>REACT</p>
            </div>
          </div>
        </Card>
        <Card className="backend-card">
          <h2 className="backend-title">Backend</h2>
        </Card>
        <Card className="etc-card">
          <h2 className="etc-title">Etc</h2>
        </Card>
      </div>
    </div>
  );
});

export default Skills;
