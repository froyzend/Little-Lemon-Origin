import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import styles from "./WeekSpecials.module.css";
import salade from "../../../assets/food/greek-salad.webp";
import saladeGreek from "../../../assets/saladeGreek.png";
import saladeVegetables from "../../../assets/saladeVegetables.png";
import dessert from "../../../assets/dessert.png";
import bruschettaImage from "../../../assets/bruschetta.jpeg";

const WeekSpecials = () => {
  const specials = [
    {
      id: 1,
      name: "Salade de Tomates",
      price: "$16.99",
      description: " Seasoned with salt and olive oil.",
      image: salade,
    },
    {
      id: 2,
      name: "Salade de Légumes",
      price: "$18.50",
      description:
        "Classic salade with fresh vegetables and a touch of olive oil.",
      image: saladeVegetables,
    },
    {
      id: 3,
      name: "Salade Grecque",
      price: "$14.99",
      description:
        "Classic salade with fresh vegetables, feta cheese, and olives.",
      image: saladeGreek,
    },
    {
      id: 4,
      name: "Dessert",
      price: "$9.99",
      description:
        "Classic dessert with fresh fruits and a touch of olive oil.",
      image: dessert,
    },
    {
      id: 5,
      name: "Bruschetta",
      price: "$9.99",
      description: "Bruschetta with fresh tomatoes and basil.",
      image: bruschettaImage,
    },
  ];

  return (
    <section className={styles.weekSpecials}>
      <div className={styles.view}>
        <h2 className={styles.title}>This Week&apos;s Specials</h2>
        <p className={styles.subtitleBtn}>Online Menu</p>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {specials.map((special) => (
            <SwiperSlide key={special.id}>
              <div className={styles.card}>
                <img
                  src={special.image}
                  alt={special.name}
                  className={styles.image}
                />
                <h3 className={styles.subtitle}>{special.name}</h3>
                <p className={styles.price}>{special.price}</p>
                <p className={styles.description}>{special.description}</p>
                <button className={styles.button}>
                  <Link to="/order">Order for Delivery</Link>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WeekSpecials;
