import React from "react";
import styles from "./ProductCard.module.css";
import classNames from "classnames";

import { ReactComponent as Heratf } from "../../icons/heartFirst.svg";
import { ReactComponent as Reload } from "../../icons/reload.svg";
import { ReactComponent as Eye } from "../../icons/pyramid.svg";

const ProductCard = ({ itemList, onSale }) => {
  return (
    <div
      className={classNames(styles.product_items, {
        [styles.product_items_sale]: onSale,
      })}
    >
      <div className={styles.img}>
        <img src={itemList.img} alt="img" />
        <div className={styles.pyramid_block}>
          <Eye className={styles.pyramid} />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.info_title}>
          <h4>{itemList.title}</h4>
          <p>{itemList.subtitle}</p>
        </div>
        <div className={styles.price}>
          <h3>{itemList.sale}</h3>
          <h5>{itemList.price}</h5>
        </div>
      </div>
      <div className={styles.effect_block}>
        <div className={styles.card_footer}>
          <button className={styles.button}>ADD CARD</button>
          <Heratf className={styles.product_herat} />
          <Reload className={styles.product_reload} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
