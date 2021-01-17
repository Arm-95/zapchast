import React from "react";
import styles from "./Home.module.css";
import { Carousel, OnsaleSlider, ProductCard } from "../../components";
import { banner, category, product } from "../../utils";

const Home = () => {
  const renderItems = banner.map((item) => {
    return (
      <div key={item.id}>
        <img src={item.img} alt="img" />
      </div>
    );
  });
  const categoryItems = category.map((item) => {
    return (
      <div key={item.id} className={styles.category_itme}>
        <img src={item.img} alt="img" />
        <p>{item.text}</p>
      </div>
    );
  });

  const productItems = product.map((item) => {
    return <ProductCard itemList={item} />;
  });

  return (
    <>
      <section>
        <div className={styles.sub_menu}>
          <ul className={styles.ul}>
            <li>Top Tags</li>
            <li> Wheels & Tires</li>
            <li>Lighting & Lamp</li>
            <li>Body Parts</li>
            <li>Smart Devices</li>
            <li>Devices</li>
            <li>Repair Parts</li>
            <li>Car Engine</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className={styles.main_block}>
          <Carousel />
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.heading}>
            <p>WELCOME TO MAZLAY</p>
            <h2>
              CUSTOM <span>SHOPPING STORE ONLINE</span>
            </h2>
            <h4>Designer Accessories. Locally Designed. Globally Crafted.</h4>
          </div>

          <div className={styles.banner}>{renderItems}</div>
          <div className={styles.category}>{categoryItems}</div>
        </div>
      </section>

      <section className={styles.product_section}>
        <div className="container">
          <div className={styles.title}>
            <h2>
              <span>our</span> Products
            </h2>
            <p>
              Consectetuer sociis mauris eu augue velit pulvinar ullamcorper in
              ac mauris ac vel, interdum sed malesuada curae sit amet non nec
              quis arcu massa.
            </p>
          </div>
          <div className={styles.sub_category}>
            <p>BEST SELLERS</p>
            <p>FETURED PRODUCT</p>
            <p>NEW ARRIVALS</p>
          </div>
          <div className={styles.product}>
            {productItems}
            <div className={styles.banner_tow}>
              <div>
                <img src="/images/banner4.jpg" alt="imgc" />
              </div>
              <div className={styles.img_banner}>
                <div className={styles.vertical}>123</div>
                <div className={styles.horizontal}>123</div>
                <img src="/images/banner5.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <OnsaleSlider productList={product} />
        </div>
      </section>
    </>
  );
};

export default Home;
