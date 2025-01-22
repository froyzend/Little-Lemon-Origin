import css from "./Header.module.css";
import vector from "../../assets/Vector.png";
import NavLinks from "./NavLink/NavLinks.jsx";

const Header = () => {
  return (
    <header>
      <div className={css.containerHeader}>
        <div className={css.logoContainer}>
          <img className={css.logo} src={vector} alt="logo" />
        </div>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
