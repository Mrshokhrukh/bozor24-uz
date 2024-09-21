import React from "react";

type RecomendationCategoryProps = {};

const RecomendationCategory: React.FC<RecomendationCategoryProps> = () => {
  return (
    <div className="mt-3">
      <div className="flex gap-3">
        <div className="flex-1 p-1.5 text-center rounded-xl bg-white font-semibold cursor-pointer">
          Famous
        </div>
        <div className="flex-1 p-1.5 text-center rounded-xl bg-white font-semibold cursor-pointer">
          New product
        </div>
        <div className="flex-1 p-1.5 text-center rounded-xl bg-white font-semibold cursor-pointer">
          Discounts
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <div
          className="bg-gradient-to-r from-[#B537F0] to-[#F24A4A] h-[100px] flex-1 rounded-2xl
        font-bold text-white text-2xl text-center flex items-center cursor-pointer"
        >
          Special products for you
        </div>
        <div
          className="bg-gradient-to-r from-[#B537F0] to-[#F24A4A] h-[100px] flex-1 rounded-2xl
        font-bold text-white text-2xl text-center flex items-center cursor-pointer"
        >
          12:28:05 Flash discounts
        </div>
      </div>
    </div>
  );
};
export default RecomendationCategory;
