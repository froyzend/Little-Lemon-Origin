import { useLocation } from "react-router-dom";
import css from "./HeroGeneral.module.css";

const HeroGeneral = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/about":
        return "About Little Lemon";
      case "/menu":
        return "Our Menu";
      case "/order":
        return "Order Online";
      case "/reserve":
        return "Make a Reservation";
      case "/login":
        return "Login to Your Account";
      default:
        return "Welcome to Little Lemon";
    }
  };

  return (
    <section className={css.HeroGeneral}>
      <h1 className={css.heroGeneral__title}>{getTitle()}</h1>
    </section>
  );
};

export default HeroGeneral;
