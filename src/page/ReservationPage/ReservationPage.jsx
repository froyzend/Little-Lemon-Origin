import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ReservationForm from "../../components/Reservations/Form/Form.jsx";
import HeroGeneral from "../../components/HeroGeneral/HeroGeneral.jsx";

const ReservationPage = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroGeneral />
        <ReservationForm />
      </main>

      <Footer />
    </div>
  );
};

export default ReservationPage;
