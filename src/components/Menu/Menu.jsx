import css from "./Menu.module.css";
import background from "../../assets/menu.webp";
const Menu = () => {
  return (
    <section className={css.menu}>
      <div className={css.backgroundMenu}>
        <img src={background} alt="menu" />
      </div>
    </section>
  );
};

export default Menu;
