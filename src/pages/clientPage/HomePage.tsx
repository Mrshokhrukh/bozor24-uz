import React from "react";
import SwiperHome from "../../components/ui/SwiperHome";
import RecomendationCategory from "../../components/ui/RecomendationCategory";
import SpecialProducts from "../../components/ui/SpecialProducts";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="bg-slate-100 py-2 mt-2 px-3 w-[100%]">
      <SwiperHome />
      <RecomendationCategory />
      <SpecialProducts />
    </div>
  );
};
export default HomePage;
