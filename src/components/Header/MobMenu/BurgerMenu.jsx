import { useState } from "react";
import { X } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobMenu from "./MobMenu.jsx";
import css from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={css.burgerButton} onClick={toggleMenu}>
        {isOpen ? <X size={48} /> : <GiHamburgerMenu size={48} />}
      </button>

      {isOpen && <MobMenu onClose={toggleMenu} />}
    </>
  );
};

export default BurgerMenu;
