import React from "react";

import useWindowDimensions from "../../Hooks/useWindowDimensions";

import Button from "../Lib/Buttons/MainButton/MainButton";

import Container from "../Container/Container";

import Image from "../../Assets/Images/Hero/Hero.png";

import styles from "./Hero.module.scss";

const Hero = () => {
  const { width, height }: { width: number; height: number } = useWindowDimensions();
  const [between, setBetween]: [number, (between: number) => void] = React.useState(
    width <= 550 ? 4 : width <= 1150 ? 6 : 7
  );
  const circles: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <section className={`${styles.hero}`}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.hero__inner}`}>
          <div className={`${styles.hero__info}`}>
            <span className={`${styles.hero__text}`}>Chase the new Flavour</span>

            <h1 className={`${styles.hero__heading}`}>The key to Fine dining</h1>

            <p className={`${styles.hero__description}`}>
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi
              facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
            </p>

            <Button className={`${styles.hero__button}`} to={"/menu"}>
              <span>Explore Menu</span>
            </Button>
          </div>

          <div className={`${styles.hero__left}`}>
            <div
              className={`${styles.hero__left__inner}`}
              onMouseEnter={() =>
                setBetween(
                  width <= 550 ? 5 : width <= 1150 ? 8 : width <= 1400 ? 9 : width <= 1500 ? 11 : 13
                )
              }
              onMouseLeave={() => setBetween(width <= 550 ? 4 : width <= 1150 ? 6 : 7)}
            >
              <div className={`${styles.hero__left__wrapper}`}>
                <img
                  className={`${styles.hero__left__image}`}
                  src={Image}
                  alt=""
                  width={827}
                  height={546}
                />
              </div>
            </div>

            <div className={`${styles.hero__left__circles}`}>
              {circles.map((circle) => (
                <i
                  className={`${styles.hero__left__circle}`}
                  key={circle}
                  style={{ left: circle * between + "px" }}
                ></i>
              ))}
            </div>
          </div>
        </div>

        {height > 760 && width >= 550 ? (
          <div className={`${styles.hero__scroll}`}>
            <i className={`${styles.hero__scroll__line}`}></i>
            <span className={`${styles.hero__scroll__text}`}>Scroll</span>
          </div>
        ) : null}
      </Container>
    </section>
  );
};

export default Hero;
