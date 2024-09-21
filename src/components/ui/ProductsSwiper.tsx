// Import Swiper React components

import {  useRef } from "react";

type ProductsSwiperProps = {};

const ProductsSwiper: React.FC<ProductsSwiperProps> = () => {
  let carouselRef = useRef<any>();

 

  return (
    <div
      ref={carouselRef}
      className="w-full overflow-scroll flex gap-4"
      id="removeScrollBar"
    >
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
      <div className="min-w-[250px] h-[300px] bg-red-400 rounded-lg"></div>
    </div>
  );
};
export default ProductsSwiper;
