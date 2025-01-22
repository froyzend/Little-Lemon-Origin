import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HeroGeneral from "../../components/HeroGeneral/HeroGeneral.jsx";
import Menu from "../../components/Menu/Menu.jsx";

const MenuPage = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroGeneral />
        <Menu />
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
