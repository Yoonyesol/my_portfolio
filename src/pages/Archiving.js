import Card from "../components/Card";
import "./Archiving.css";

const Archiving = () => {
  return (
    <div className="archiving">
      <h1 className="archiving-title">
        <a name="Archiving">Archiving</a>
      </h1>
      <div className="card-wrapper">
        <Card className="github-card">
          <h2 className="github-title">GitHub</h2>
          <a href="https://github.com/Yoonyesol">github.com/Yoonyesol</a>
          <p>작업한 소스를 업로드해 둔 저장소입니다.</p>
        </Card>
        <Card className="blog-card">
          <h2 className="blog-title">Blog</h2>
          <a href="https://florescene.tistory.com/">florescene.tistory.com</a>
          <p>공부 기록, 프로젝트 진행 과정을 기록해둔 블로그입니다.</p>
        </Card>
      </div>
    </div>
  );
};

export default Archiving;
