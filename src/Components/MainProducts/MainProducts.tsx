import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";

import Categories from "../../Datas/Categories";
import Products from "../../Datas/Products";

import Button from "../Lib/Buttons/MainButton/MainButton";
import HeadingSmall from "../Lib/Headings/HeadingSmall/HeadingSmall";

import styles from "./MainProducts.module.scss";

const MainProducts: React.FC = () => {
  const { width }: { width: number } = useWindowDimensions();

  const [category, setCategory] = React.useState<string>("all");
  const [categories] = React.useState<Category[]>(Categories);

  const [products, setProducts] = React.useState<Product[]>(Products);

  React.useEffect(() => {
    if (width >= 1010) {
      setProducts(Products);
    } else if (width >= 680) {
      setProducts(() => [...Products].slice(0, 10));
    } else if (width < 680) {
      setProducts(() => [...Products].slice(0, 5));
    }
  }, [width]);

  return (
    <section className={`${styles.products}`}>
      <div className={`${styles.container} container`}>
        <HeadingSmall className={`${styles.products__heading}`}>our regular menu pack</HeadingSmall>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          slidesPerGroup={2}
          className={`${styles.products__menu__list}`}
        >
          {categories.length > 0 &&
            categories.map((item) => (
              <SwiperSlide className={`${styles.products__menu__item}`} key={item.id}>
                <Button
                  className={`${styles.products__menu__button} ${
                    category === item.slug ? styles["products__menu__button--active"] : ""
                  }`}
                  onClick={() => setCategory(item.slug)}
                >
                  <span>{item.title}</span>
                </Button>
              </SwiperSlide>
            ))}
        </Swiper>

        <ul className={`${styles.products__list}`}>
          {products.length > 0 &&
            products.map((product) => (
              <li className={`${styles.product}`} key={product.id}>
                <img
                  className={`${styles.product__image}`}
                  src={product.image}
                  alt={product.title}
                  width={270}
                  height={183}
                />

                <h3 className={`${styles.product__heading}`}>{product.title}</h3>

                <mark className={`${styles.product__price}`}>${product.price}</mark>
              </li>
            ))}
        </ul>

        <Button className={`${styles.products__button}`} to={"/menu"}>
          <span>show more</span>
        </Button>
      </div>
    </section>
  );
};

export default MainProducts;
