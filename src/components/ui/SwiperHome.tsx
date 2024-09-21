import React from "react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

type SwiperHomeProps = {};

const SwiperHome: React.FC<SwiperHomeProps> = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/564x/53/e0/a1/53e0a1efcd011d97fc5f728b1b6093cb.jpg"
          alt=""
          className="h-[100px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/564x/53/e0/a1/53e0a1efcd011d97fc5f728b1b6093cb.jpg"
          alt=""
          className="h-[100px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/564x/53/e0/a1/53e0a1efcd011d97fc5f728b1b6093cb.jpg"
          alt=""
          className="h-[100px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/564x/53/e0/a1/53e0a1efcd011d97fc5f728b1b6093cb.jpg"
          alt=""
          className="h-[100px]"
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperHome;
