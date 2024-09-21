// Import Swiper React components

import { useRef } from "react";
import ProductForSpecial from "./ProductForSpecial";

type ProductsSwiperProps = {};

const ProductsSwiper: React.FC<ProductsSwiperProps> = () => {
  let carouselRef = useRef<any>();

  return (
    <div
      ref={carouselRef}
      className="w-full overflow-scroll flex gap-4"
      id="removeScrollBar"
    >
      {Array(10)
        .fill("")
        .map((_, i) => {
          return <ProductForSpecial key={i} />;
        })}
    </div>
  );
};
export default ProductsSwiper;
