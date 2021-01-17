import React, { useState } from "react";
import styles from "./SliderSlice.module.css";
import classnames from "classnames";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setActiveSlide(current),
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <div className={styles.content}>
        <img src="/images/slider1.jpg" alt="img" />
        <h1
          className={classnames(styles.title, {
            [styles.title_active]: activeSlide === 0,
          })}
        >
          asdasdasdadasd
        </h1>
        <button>click</button>
      </div>
      <div className={styles.content}>
        <img src="/images/slider2.jpg" alt="img" />
        <h1
          className={classnames(styles.title, {
            [styles.title_active]: activeSlide === 1,
          })}
        >
          asdasdasdadasd
        </h1>
        <button>click</button>
      </div>
      <div className={styles.content}>
        <img src="/images/slider3.jpg" alt="img" />
        <h1
          className={classnames(styles.title, {
            [styles.title_active]: activeSlide === 2,
          })}
        >
          asdasdasdadasd
        </h1>
        <button>click</button>
      </div>
    </Slider>
  );
};

export default Carousel;
