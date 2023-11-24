import { imageUrl } from "../utils/commonUtil";
import "./TopButton.css";

const TopButton = (props) => {
  return (
    <div className="top-btn" onClick={props.moveToHome}>
      <img src={imageUrl + "assets/images/up.png"} />
    </div>
  );
};

export default TopButton;
