import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import About from "../../components/Home/About/About.jsx";
import HeroGeneral from "../../components/HeroGeneral/HeroGeneral.jsx";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroGeneral />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
