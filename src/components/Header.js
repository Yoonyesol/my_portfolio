import "./Header.css";

const Header = ({
  moveToHome,
  moveToArc,
  moveToSkill,
  moveToPrj,
  moveToEdu,
  moveToContact,
  selectedPage,
}) => {
  return (
    <header className="header">
      <div className="header-contents">
        <div className="header-title" onClick={moveToHome}>
          Portfolio
        </div>
        <div className="menu-list">
          <div
            className={`menu-item ${selectedPage === "archiving" && "visible"}`}
          >
            <div onClick={moveToArc}>Archiving</div>
          </div>
          <div
            className={`menu-item ${selectedPage === "skills" && "visible"}`}
          >
            <div onClick={moveToSkill}>Tech Skills</div>
          </div>
          <div
            className={`menu-item ${selectedPage === "project" && "visible"}`}
          >
            <div onClick={moveToPrj}>Project</div>
          </div>
          <div className={`menu-item ${selectedPage === "edu" && "visible"}`}>
            <div onClick={moveToEdu}>Edu & Cert</div>
          </div>
          <div
            className={`menu-item ${selectedPage === "contact" && "visible"}`}
          >
            <div onClick={moveToContact}>Contact</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
