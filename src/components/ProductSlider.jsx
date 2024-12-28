import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "../styles/ProductSlider.css";
import logo from "../images/rooted-in-ignorance2.png";

import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";


const ProductSlider = () => {
  const products = [
    { id: 1, name: "Product 1", image: product1 },
    { id: 2, name: "Product 2", image: product2 },
    { id: 3, name: "Product 3", image: product3 },
    { id: 4, name: "Product 4", image: product1 },
    { id: 5, name: "Product 5", image: product2 },
    { id: 6, name: "Product 6", image: product3 },
    
  ];

//   return (
//     <div className="product-slider">
//       <h2>Our Products</h2>
//       <Swiper
//         modules={[Navigation, Autoplay, Pagination]}
//         navigation={true}
//         autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//         loop={true}
//         pagination={{ clickable: true }}
//         className="mySwiper"
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product.id}>
//             <img src={product.image} alt={product.name} />
//             <p>{product.name}</p>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ProductSlider;

return (
    <div className="product-page">
      {/* Header Image */}
      <div className="product-header">
        {/* <img
          src="../images/rooted-in-ignorance2.png"
          alt="Rooted in Ignorance"
          className="product-header-image"
        /> */}
        <img src={logo} alt="Rooted in Ignorance" className="logo-image" />

      </div>

      {/* Carousel */}
      <div className="carousel-container">
        <div className="carousel">
          {products.map((product) => (
            <div className="carousel-item" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="links">
            <a href="#shop">Shop</a>
            <a href="#media">Media</a>
            <a href="#archive">Archive</a>
            <a href="#forum">Forum</a>
          </div>
    </div>
  );
};

export default ProductSlider;