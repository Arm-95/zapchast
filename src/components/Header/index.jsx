import React from "react";
import styles from "./Header.module.css";

import DropDown from "../DropDown";
import CategoryMenu from "../CategoryMenu";
import { dropDown, categrysData } from "../../utils";
import { ReactComponent as Basket } from "../../icons/basket.svg";
import { ReactComponent as Herat } from "../../icons/heart.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.top_left}>
            <DropDown itemList={dropDown.lenguage} isWhate />
            <div>
              <DropDown itemList={dropDown.money} isWhate />
            </div>
          </div>
          <div className={styles.top_right}>
            <div>
              <p>REGISTR</p>
            </div>
            <div>
              <p>LOGIN</p>
            </div>
            <div>
              <p>SHOPPING CART</p>
            </div>
            <div>
              <p>CHECKOUT</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.bottom}>
          <span>
            <img src="/images/logo.png" alt="img" />
          </span>
          <nav className={styles.navbar}>
            <div className={styles.categorya}>
              <DropDown itemList={dropDown.categoria} />
              <div className={styles.line}></div>
            </div>

            <div>
              <input
                type="search"
                placeholder="Search Product"
                className={styles.input}
              />
              <button className={styles.button}>Search</button>
            </div>
            <div className={styles.heart_basket}>
              <div className={styles.heart}>
                <Herat />
                <span className={styles.count_heart}>3</span>
              </div>
              <div className={styles.basket}>
                <Basket />
                <div className={styles.line_two}></div>
                <p>125$</p>
                <span className={styles.count_basket}>2</span>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <CategoryMenu dataMenu={categrysData} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
