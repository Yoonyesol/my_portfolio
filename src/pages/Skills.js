import { forwardRef } from "react";
import Card from "../components/Card";
import "./Skills.css";
import { imageUrl } from "../utils/commonUtil";

const Skills = forwardRef((props, ref) => {
  return (
    <div className="container skills" ref={ref}>
      <h1 className="main-title">Tech Skills</h1>
      <div className="card-wrapper">
        <div>
          <Card className="skill-card">
            <h2 className="skill-title">Frontend</h2>
            <div className="skill-img-wrapper">
              <img src={imageUrl + "assets/images/htmlcssjs.png"} />
              <img src={imageUrl + "assets/images/react.png"} />
              <img
                src={imageUrl + "assets/images/styled.png"}
                style={{ width: "120px" }}
              />
            </div>
          </Card>
          <Card className="skill-card">
            <h2 className="skill-title">Backend</h2>
            <div className="skill-img-wrapper">
              <img src={imageUrl + "assets/images/node.png"} />
              <img src={imageUrl + "assets/images/mysql.png"} />
            </div>
          </Card>
        </div>
        <div className="right-items">
          <Card className="skill-card">
            <h2 className="skill-title">Deployment</h2>
            <div className="skill-img-wrapper">
              <img src={imageUrl + "assets/images/firebase.png"} />
              <img src={imageUrl + "assets/images/netlify.png"} />
              <img src={imageUrl + "assets/images/heroku.png"} />
            </div>
          </Card>
          <Card className="skill-card">
            <h2 className="skill-title">Etc</h2>
            <div className="skill-img-wrapper">
              <img src={imageUrl + "assets/images/git.png"} />
              <img src={imageUrl + "assets/images/github.png"} />
              <img src={imageUrl + "assets/images/python.png"} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
});

export default Skills;
