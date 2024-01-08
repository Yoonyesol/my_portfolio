import { useEffect, useState } from "react";
import "./Header.css";

const Header = ({
  moveToHome,
  moveToArc,
  moveToSkill,
  moveToPrj,
  moveToQualification,
  moveToContact,
  selectedPage,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = (prev) => {
    setToggleMenu((prev) => !toggleMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (toggleMenu) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggleMenu]);

  return (
    <header className="header">
      <div className="header-contents">
        <div className="title-toggle">
          <span className="header-title" onClick={moveToHome}>
            YESOL
          </span>
          <div className="toggle-button">
            <img
              src={
                process.env.PUBLIC_URL +
                `/assets/images/${toggleMenu ? `cancle` : `menu`}.png`
              }
              onClick={handleToggleMenu}
            />
          </div>
        </div>
        <ul className={`menu-list ${toggleMenu ? "visible" : ""}`}>
          <li
            className={`menu-item ${selectedPage === "archiving" && "visible"}`}
          >
            <div onClick={moveToArc}>ARCHIVING</div>
          </li>
          <li className={`menu-item ${selectedPage === "skills" && "visible"}`}>
            <div onClick={moveToSkill}>SKILLS</div>
          </li>
          <li
            className={`menu-item ${selectedPage === "project" && "visible"}`}
          >
            <div onClick={moveToPrj}>PROJECT</div>
          </li>
          <li
            className={`menu-item ${
              selectedPage === "qualification" && "visible"
            }`}
          >
            <div onClick={moveToQualification}>QUALIFICATION</div>
          </li>
          <li
            className={`menu-item ${selectedPage === "contact" && "visible"}`}
          >
            <div onClick={moveToContact}>CONTACT</div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
