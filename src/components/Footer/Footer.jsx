import NavLinksFooter from "../Footer/NavLinksFooter/NavLinksFooter.jsx";
import SocialLinks from "./SocialLinks/SocialLinks.jsx";
import Contacts from "./Contacts/Contacts.jsx";
import css from "./Footer.module.css";
import vector from "../../assets/Vector.png";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.logoContainer}>
        <img className={css.logo} src={vector} alt="logo" />
      </div>
      <NavLinksFooter />
      <SocialLinks />
      <Contacts />
    </footer>
  );
};

export default Footer;
