import "./MenuBar.css";

const MenuBar = () => {
  return (
    <header className="menu-bar">
      <div className="menu-contents">
        <div className="menu-title">
          <a href="#Home">Portfolio</a>
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <a href="#Archiving">Archiving</a>
          </div>
          <div className="menu-item">
            <a href="#Skills">Tech Skills</a>
          </div>
          <div className="menu-item">
            <a href="#Project">Project</a>
          </div>
          <div className="menu-item">
            <a href="#Edu">Edu & Cert</a>
          </div>
          <div className="menu-item">
            <a href="#Contact">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuBar;
