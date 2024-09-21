import React from "react";
import { Link } from "react-router-dom";
import ProductsSwiper from "./ProductsSwiper";

type SpecialProductsProps = {};

const SpecialProducts: React.FC<SpecialProductsProps> = () => {
  return (
    <div className="w-[100%]">
      <div className="flex justify-between mt-5">
        <p className="font-semibold">Special Products For You</p>
        <Link to="" className="text-blue-500 font-semibold">
          See all
        </Link>
      </div>
      <div className="mt-3 w-[100%]">
        <ProductsSwiper />
      </div>
    </div>
  );
};
export default SpecialProducts;
