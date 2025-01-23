import { Link } from "react-router-dom";
import css from "./MobileMenuModal.module.css";

const MobMenu = ({ onClose }) => {
  return (
    <div className={css.mobileMenuOverlay}>
      <div className={css.mobileMenuContainer}>
        <ul className={css.navList}>
          <li className={css.item}>
            <Link to="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li className={css.item}>
            <Link to="/about" onClick={onClose}>
              About
            </Link>
          </li>
          <li className={css.item}>
            <Link to="/menu" onClick={onClose}>
              Menu
            </Link>
          </li>
          <li className={css.item}>
            <Link to="/order" onClick={onClose}>
              Order
            </Link>
          </li>
          <li className={css.item}>
            <Link to="/reserve" onClick={onClose}>
              Reservation
            </Link>
          </li>
          <li className={css.item}>
            <Link to="/login" onClick={onClose}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobMenu;
