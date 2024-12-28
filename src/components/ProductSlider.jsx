import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../styles/ProductSlider.css";

import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";

const ProductSlider = () => {
  const products = [
    { id: 1, name: "Product 1", image: product1 },
    { id: 2, name: "Product 2", image: product2 },
    { id: 3, name: "Product 3", image: product3 },
  ];

  return (
    <div className="product-slider">
      <h2>Our Products</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
