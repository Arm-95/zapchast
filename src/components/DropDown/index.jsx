import React, { useState, useRef } from "react";
import styles from "./DropDown.module.css";
import { useOutsideClick } from "../../hooks";
import { ReactComponent as Arrow } from "../../icons/arrowD.svg";
import classNames from "classnames";

const DropDown = ({ itemList, isWhate }) => {
  const outRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(itemList[0].name);

  useOutsideClick(outRef, () => setIsOpen(false));

  const openToggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const changeValueHandler = (name) => {
    setValue(name);
    openToggleHandler();
  };

  const renderItems = itemList.map((item) => {
    return (
      <div
        key={item.id}
        onClick={() => changeValueHandler(item.name)}
        className={classNames(styles.content_item, {
          [styles.content_item_whate]: isWhate,
        })}
      >
        {item.name}
      </div>
    );
  });

  return (
    <div className={styles.container} ref={outRef}>
      <div
        className={classNames(styles.container_header, {
          [styles.container_header_active]: isOpen,
          [styles.white_arrow]: isWhate,
        })}
        onClick={openToggleHandler}
      >
        {value}
        <Arrow />
      </div>

      {isOpen ? (
        <div
          className={classNames(styles.content, {
            [styles.arrow]: isWhate,
          })}
        >
          {renderItems}
        </div>
      ) : null}
    </div>
  );
};

DropDown.propTypes = {};

export default DropDown;
