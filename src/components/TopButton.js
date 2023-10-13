import "./TopButton.css";

const TopButton = (props) => {
  return (
    <div className="top-btn" onClick={props.moveToHome}>
      <img src={process.env.PUBLIC_URL + "assets/images/up.png"} />
    </div>
  );
};

export default TopButton;
