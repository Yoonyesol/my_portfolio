import Card from "../components/Card";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>I interested in JAVASCRIPT</h2>
      <Card>
        <img src={process.env.PUBLIC_URL + "assets/images/snoopy.jpg"} />
      </Card>
      <h3>윤예솔</h3>
      <div>
        <p>상상을 실제 코드로 구현하는 과정을 즐깁니다.</p>
        <p>지식의 습득과 성장에 열정을 가지고 있습니다.</p>
      </div>
    </div>
  );
};

export default Home;
