import React, { forwardRef } from "react";

import "./Home.css";
import { imageUrl } from "../utils/commonUtil";

const Home = forwardRef((props, ref) => {
  return (
    <div className="home" ref={ref}>
      <div className="container home-container">
        <div className="title">
          <h1>
            <span>YOON YESOL</span>
          </h1>
          <h2>FRONT-END DEV.</h2>
        </div>
        <div className="description">
          <p>상상을 실제 코드로 구현하는 과정을 즐깁니다.</p>
          <p>지식의 습득과 성장에 열정을 가지고 있습니다.</p>
        </div>
      </div>
      <div className="scroll">
        <img
          src={imageUrl + "assets/images/down.png"}
          onClick={props.moveToArc}
        />
      </div>
    </div>
  );
});

export default Home;
