import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";

import PopularProducts from "../../Datas/PopularProducts";

import Container from "../Container/Container";

import HeadingSmall from "../Lib/Headings/HeadingSmall/HeadingSmall";
import NavigateButton from "../Lib/Buttons/NavigateButton/NavigateButton";

import PopularCard from "../PopularCard/PopularCard";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import styles from "./Popular.module.scss";

const Popular = () => {
  const { width }: { width: number } = useWindowDimensions();

  const sliderRef = React.useRef() as any;

  const [products] = React.useState(PopularProducts);

  const prevButton = React.useRef<HTMLButtonElement | null>(null);
  const nextButton = React.useRef<HTMLButtonElement | null>(null);

  const handlePrev = React.useCallback(() => {
    if (width > 550) {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }
  }, [width]);

  const handleNext = React.useCallback(() => {
    if (width > 550) {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }
  }, [width]);

  React.useEffect(() => {
    if (width > 550) {
      prevButton.current!.disabled = sliderRef.current.swiper.isBeginning;
      nextButton.current!.disabled = sliderRef.current.swiper.isEnd;
    }
  }, [width]);

  return (
    <section className={`${styles.popular}`}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.popular__top}`}>
          <HeadingSmall className={`${styles.popular__heading}`}>popular dishes</HeadingSmall>

          {width > 550 && (
            <div className={`${styles.popular__top__right}`}>
              <NavigateButton
                className={`${styles.popular__swiper__button} ${styles["popular__swiper__button--prev"]}`}
                onClick={handlePrev}
                ref={prevButton}
              />
              <NavigateButton
                className={`${styles.popular__swiper__button} ${styles["popular__swiper__button--next"]}`}
                onClick={handleNext}
                ref={nextButton}
              />
            </div>
          )}
        </div>

        <Swiper
          className={`${styles.popular__list}`}
          onInit={(core: SwiperCore) => {
            sliderRef.current = core.el;
          }}
          slidesPerView={"auto"}
          spaceBetween={20}
          slidesPerGroup={1}
          autoplay={{
            delay: 5000,
          }}
          onSlideChange={() => {
            if (width > 550) {
              prevButton.current!.disabled = sliderRef.current.swiper.isBeginning;
              nextButton.current!.disabled = sliderRef.current.swiper.isEnd;
            }
          }}
          modules={[Autoplay]}
        >
          {products.length > 0 &&
            products.map((product) => (
              <SwiperSlide className={styles.popular__slide} key={product.id}>
                <PopularCard product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Popular;
