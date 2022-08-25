import React from "react";
import { Link } from "react-router-dom";

import useNav from "../../Hooks/useNav";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

import Nav from "../Nav/Nav";

import Button from "../Lib/Buttons/MainButton/MainButton";

import Container from "../Container/Container";

import Logo from "../../Assets/Images/Logo/Logo.webp";
import Burger from "../Lib/Icons/Burger";
import Close from "../Lib/Icons/Close";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useNav();

  const { width }: { width: number } = useWindowDimensions();

  return (
    <header className={`${styles.header}`}>
      <Container className={`${styles.container}`}>
        <Link className={`${styles.header__link}`} to={"/"}>
          <img
            className={`${styles.header__logo}`}
            src={Logo}
            alt={"EaTurkish's logo"}
            width={width > 700 ? 135 : 125}
            height={width > 700 ? 47 : 44}
          />
        </Link>

        <Nav />

        {width > 700 ? null : (
          <button className={`${styles.header__burger}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Close /> : <Burger />}
          </button>
        )}

        {width > 700 ? (
          <Button className={`${styles.header__button}`} to={"/login"}>
            <span>log in</span>
          </Button>
        ) : null}
      </Container>
    </header>
  );
};

export default Header;
