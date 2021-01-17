import React from "react";
import styles from "./OnsaleSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from "../ProductCard";

import { ReactComponent as Arrow } from "../../icons/right-arrow.svg";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <Arrow />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <Arrow />
    </div>
  );
};

const OnsaleSlider = ({ productList }) => {
  const activeSlide = productList[0];
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: styles.content,
  };

  const renderItems = productList.map((item) => {
    return <ProductCard onSale itemList={item} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={activeSlide.img} alt="img" />
        <div>
          <p>{activeSlide.title}</p>
          <p>{activeSlide.subtitle}</p>
          <h3>{activeSlide.price}</h3>
          <h3>{activeSlide.sale}</h3>
          <h2>{activeSlide.text}</h2>
          <div></div>
        </div>
      </div>
      <div className={styles.rigth}>
        <Slider {...settings}>{renderItems}</Slider>
      </div>
    </div>
  );
};

export default OnsaleSlider;
