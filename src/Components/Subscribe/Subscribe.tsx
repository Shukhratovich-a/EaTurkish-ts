import HeadingBig from "../Lib/Headings/HeadingBig/HeadingBig";
import Button from "../Lib/Buttons/MainButton/MainButton";

import styles from "./Subscribe.module.scss";

const Subscribe: React.FC = () => {
  return (
    <section className={`${styles.subscribe}`}>
      <div className={`${styles.subscribe__wrapper}`}>
        <div className={`${styles.subscribe__inner}`}>
          <HeadingBig
            className={`${styles.subscribe__heading}`}
            topHeading={"Newsletter"}
            heading={"Subscribe to Our Newsletter"}
            description={"And never miss latest Updates!"}
          />

          <form className={`${styles.subscribe__form}`} autoComplete="off">
            <input
              className={`${styles.subscribe__form__input}`}
              type="mail"
              name="mail"
              placeholder="email address"
              required
            />

            <Button className={`${styles.subscribe__form__button}`} type={"submit"}>
              <span>subscribe</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
