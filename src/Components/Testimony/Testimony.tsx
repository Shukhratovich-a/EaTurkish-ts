import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Customers from "../../Datas/Cutomers";

import Container from "../Container/Container";
import HeadingBig from "../Lib/Headings/HeadingBig/HeadingBig";

import DateIcon from "../Lib/Icons/Date";
import TimeIcon from "../Lib/Icons/Time";
import WatchIcon from "../Lib/Icons/Watch";

import styles from "./Testimony.module.scss";

const Testimony: React.FC = () => {
  const normalizeTime = (time: string, type: "date" | "time" = "date"): string => {
    const date: Date = new Date(Date.parse(time));

    const day: string = String(date.getDate()).padStart(2, "0");
    const month: string = String(date.getMonth() + 1).padStart(2, "0");
    const year: string = String(date.getFullYear()).padStart(4, "0");

    const hour: string = String(date.getHours()).padStart(2, "0");
    const minute: string = String(date.getMinutes()).padStart(2, "0");

    if (type === "time") return hour + ":" + minute;
    else return day + "/" + month + "/" + year;
  };

  const [customers] = React.useState<Customer[]>(Customers);

  return (
    <section className={`${styles.testimony}`}>
      <Container className={`${styles.container}`}>
        <HeadingBig
          className={`${styles.testimony__heading}`}
          topHeading={"Testimony"}
          heading={"Happy customers"}
        />

        <Swiper
          className={`${styles.tesimony__list}`}
          // onInit={(core: SwiperCore) => {
          //   sliderRef.current = core.el;
          // }}
          slidesPerView={3}
          spaceBetween={35}
          slidesPerGroup={1}
          autoplay={{
            delay: 5000,
          }}
          // onSlideChange={() => {
          //   if (width > 550) {
          //     prevButton.current!.disabled = sliderRef.current.swiper.isBeginning;
          //     nextButton.current!.disabled = sliderRef.current.swiper.isEnd;
          //   }
          // }}
          modules={[Autoplay]}
        >
          {customers.length > 0 &&
            customers.map((customer) => (
              <SwiperSlide className={`${styles.tesimony__slide}`} key={customer.id}>
                <div className={`${styles.tesimony__slide__inner}`}>
                  <h3 className={`${styles.tesimony__slide__heading}`}>{customer.name}</h3>
                  <p className={`${styles.tesimony__slide__description}`}>{customer.description}</p>
                </div>

                <div className={`${styles.tesimony__slide__bottom}`}>
                  <time className={`${styles.tesimony__slide__text}`}>
                    <DateIcon />
                    <span>{normalizeTime(customer.time)}</span>
                  </time>

                  <time className={`${styles.tesimony__slide__text}`}>
                    <TimeIcon />
                    <span>{normalizeTime(customer.time, "time")}</span>
                  </time>

                  <span className={`${styles.tesimony__slide__text}`}>
                    <WatchIcon />
                    <span>{customer.watches}</span>
                  </span>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimony;
