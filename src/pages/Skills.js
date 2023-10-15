import { forwardRef } from "react";
import Card from "../components/Card";
import "./Skills.css";

const Skills = forwardRef((props, ref) => {
  return (
    <div className="container skills" ref={ref}>
      <h1 className="main-title">Tech Skills</h1>
      <div className="card-wrapper">
        <div>
          <Card className="skill-card">
            <h2 className="skill-title">Frontend</h2>
            <div className="skill-img-wrapper">
              <img
                src={process.env.PUBLIC_URL + "assets/images/htmlcssjs.png"}
              />
              <img src={process.env.PUBLIC_URL + "assets/images/react.png"} />
              <img
                src={process.env.PUBLIC_URL + "assets/images/styled.png"}
                style={{ width: "120px" }}
              />
            </div>
          </Card>
          <Card className="skill-card">
            <h2 className="skill-title">Backend</h2>
            <div className="skill-img-wrapper">
              <img src={process.env.PUBLIC_URL + "assets/images/node.png"} />
              <img src={process.env.PUBLIC_URL + "assets/images/mysql.png"} />
            </div>
          </Card>
        </div>
        <div className="right-items">
          <Card className="skill-card">
            <h2 className="skill-title">Deployment</h2>
            <div className="skill-img-wrapper">
              <img
                src={process.env.PUBLIC_URL + "assets/images/firebase.png"}
              />
              <img src={process.env.PUBLIC_URL + "assets/images/netlify.png"} />
              <img src={process.env.PUBLIC_URL + "assets/images/heroku.png"} />
            </div>
          </Card>
          <Card className="skill-card">
            <h2 className="skill-title">Etc</h2>
            <div className="skill-img-wrapper">
              <img src={process.env.PUBLIC_URL + "assets/images/git.png"} />
              <img src={process.env.PUBLIC_URL + "assets/images/github.png"} />
              <img src={process.env.PUBLIC_URL + "assets/images/python.png"} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
});

export default Skills;
