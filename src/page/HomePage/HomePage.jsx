import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Home/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import css from "./HomePage.module.css";

import Services from "../../components/Home/Services/Services.jsx";
import WeekSpecials from "../../components/Home/WeekSpecials/WeekSpecials.jsx";

const HomePage = () => {
  return (
    <div>
      <div className={css.background}>
        <Header />
        <Hero />
      </div>

      <WeekSpecials />
      <Services />

      <Footer />
    </div>
  );
};

export default HomePage;
