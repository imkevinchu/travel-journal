import { FaGlobeAmericas } from "react-icons/fa";

const Header = () => {
  return (
    <header className="Header">
      <FaGlobeAmericas className="header--icon" />
      <p className="header--title">my travel journal.</p>
    </header>
  );
};

export default Header;
