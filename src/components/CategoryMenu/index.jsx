import React, { useState } from "react";
import styles from "./CategoryMenu.module.css";
import { ReactComponent as Burger } from "../../icons/burger.svg";
import classNames from "classnames";
import { ReactComponent as Arrow } from "../../icons/arrowD.svg";

const CategoryMenu = ({ dataMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const renderItems = dataMenu.map((item) => {
    return (
      <div key={item.id} className={styles.content_item}>
        {item.name}
        {item.subCategory && (
          <>
            <Arrow className={styles.content_item_arrow} />
            <div className={styles.sub_category}>
              {item.subCategory.map((item) => {
                return <dive key={item.id}>{item.name}</dive>;
              })}
            </div>
          </>
        )}
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={toggleHandler} role="button">
        <Burger className={styles.burger} />
        <p>ALL CATEGORIES</p>
      </div>
      <div
        className={classNames(styles.content, {
          [styles.content_active]: isOpen,
        })}
      >
        <div className={styles.content_wraper}>{renderItems}</div>
      </div>
    </div>
  );
};

export default CategoryMenu;
