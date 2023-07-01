import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return <NavbarLink key={link.id} {...link} />;
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <IconLink key={link.id} {...link} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

const NavbarLink = ({ href, text }) => {
  return (
    <li>
      <a href={href} className="nav-link">
        {" "}
        {text}{" "}
      </a>
    </li>
  );
};
const IconLink = ({ href, icon }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default Navbar;
