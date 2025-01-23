import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Home/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import Services from "../../components/Home/Services/Services.jsx";
import WeekSpecials from "../../components/Home/WeekSpecials/WeekSpecials.jsx";

const HomePage = () => {
  return (
    <div>
      <Header />

      <Hero />

      <WeekSpecials />
      <Services />

      <Footer />
    </div>
  );
};

export default HomePage;
