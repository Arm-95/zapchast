import React, { useState, useEffect } from "react";
import useScrollPosition from "use-scroll-position";
import styles from "./ScrollUp.module.css";

const ScrollUp = () => {
  const [isShow, setIsShow] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 263) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  });

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return isShow ? (
    <div className={styles.button} onClick={scrollTop}>
      s
    </div>
  ) : null;
};

export default ScrollUp;
