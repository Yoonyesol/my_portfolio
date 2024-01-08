import React, { forwardRef, useState, useEffect } from "react";
import "./Home.css";

const Home = forwardRef((props, ref) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const typeNextText = () => {
      const currentText = "YOON YESOL";
      const delay = 150; // 글자 나타나는 간격(ms)

      for (let i = 0; i <= currentText.length; i++) {
        setTimeout(() => {
          setTypedText(currentText.substring(0, i));
        }, i * delay);
      }
    };

    typeNextText();
  }, []);

  return (
    <div className="home" ref={ref}>
      <div className="container home-container">
        <div className="title">
          <h1>{typedText && <span>{typedText}</span>}</h1>
          <h2>FRONT-END DEV.</h2>
        </div>
        <div className="description">
          <p>끊임없는 도전을 통해 문제를 해결하는 것을 즐깁니다.</p>
          <p>지식의 습득과 성장에 열정을 가지고 있습니다.</p>
        </div>
      </div>
      <div className="scroll">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/down.png"}
          onClick={props.moveToArc}
        />
      </div>
    </div>
  );
});

export default Home;
