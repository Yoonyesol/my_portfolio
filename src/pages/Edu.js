import { forwardRef } from "react";
import Card from "../components/Card";
import "./Edu.css";

const Edu = forwardRef((props, ref) => {
  return (
    <div className="edu" ref={ref}>
      <h1 className="edu-title">Edu & Certification</h1>
      <div className="edu-card-wrapper">
        <Card className="edu-card">
          <h2 className="edu-title">Edu</h2>
          <img src={process.env.PUBLIC_URL + "assets/images/inha.svg"} />
          <h3>인하대학교 컴퓨터공학과 학사</h3>
          <h4> (2017.02 ~ 2023.08)</h4>
        </Card>
        <Card className="edu-card">
          <h2 className="edu-title">Certification</h2>
          <img src={process.env.PUBLIC_URL + "assets/images/q-net.png"} />
          <h3>정보처리기사</h3>
          <h4>(한국산업인력공단. 2023.06.09)</h4>
          <img src={process.env.PUBLIC_URL + "assets/images/opic.webp"} />
          <h3>Opic IM2</h3>
          <h4>(ACTFL. 2023.06.07)</h4>
        </Card>
      </div>
    </div>
  );
});

export default Edu;