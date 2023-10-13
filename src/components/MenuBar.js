import "./MenuBar.css";

const MenuBar = ({
  moveToHome,
  moveToArc,
  moveToSkill,
  moveToPrj,
  moveToEdu,
  moveToContact,
}) => {
  return (
    <header className="menu-bar">
      <div className="menu-contents">
        <div className="menu-title" onClick={moveToHome}>
          Portfolio
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <div onClick={moveToArc}>Archiving</div>
          </div>
          <div className="menu-item">
            <div onClick={moveToSkill}>Tech Skills</div>
          </div>
          <div className="menu-item">
            <div onClick={moveToPrj}>Project</div>
          </div>
          <div className="menu-item">
            <div onClick={moveToEdu}>Edu & Cert</div>
          </div>
          <div className="menu-item">
            <div onClick={moveToContact}>Contact</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuBar;
