import React, { forwardRef, useEffect, useState } from "react";
import Card from "../components/Card";

import "./Home.css";

const lang_arr = ["JAVASCRIPT", "HTML", "CSS", "REACT"];

const Home = forwardRef((props, ref) => {
  const [lang, setLang] = useState(lang_arr[0]);

  // useEffect(() => {
  //   let lang_num = 0;
  //   const timer = setInterval(() => {
  //     lang_num + 1 > 3 ? (lang_num = 0) : lang_num++;
  //     setLang(lang_arr[lang_num]);
  //   }, 2000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="home" ref={ref}>
      <div className="container home-container">
        <div className="title">
          <h1>
            <span>YOON YESOL</span>
          </h1>
          <h2>FRONT-END DEV.</h2>
        </div>
        {/* <h1>
        I interested in
        <p className={`lang ${lang}`} style={{ fontSize: "60px" }}>
          {lang}
        </p>
      </h1>
      <Card className="home-card">
        <img src={process.env.PUBLIC_URL + "assets/images/snoopy.jpg"} />
      </Card> */}
        <div className="intro">
          {/* <h2>윤예솔</h2>
        <h4 className="email-link">
          <a href="mailto:seaofiandme35@gmail.com">
            📧 seaofiandme35@gmail.com
          </a>
        </h4> */}
          <div className="description">
            <p>상상을 실제 코드로 구현하는 과정을 즐깁니다.</p>
            <p>지식의 습득과 성장에 열정을 가지고 있습니다.</p>
          </div>
        </div>
      </div>

      <div className="scroll">
        <img
          src={process.env.PUBLIC_URL + "assets/images/down.png"}
          onClick={props.moveToArc}
        />
      </div>
    </div>
  );
});

export default Home;
