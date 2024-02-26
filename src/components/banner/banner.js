import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from 'swiper/modules';

import banner_1 from '../../assets/banners/1.jpg'; 
import banner_2 from '../../assets/banners/2.jpg'; 
import banner_3 from '../../assets/banners/3.jpg'; 
import banner_4 from '../../assets/banners/4.jpg'; 

import 'swiper/css';
import 'swiper/css/pagination';
import './banner.css';


function Banner() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true, }}
      className="ntt__banner"
    >
      <SwiperSlide>
        <img className="ntt__banner-image" src={banner_1} alt="1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="ntt__banner-image" src={banner_2} alt="1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="ntt__banner-image" src={banner_3} alt="1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="ntt__banner-image" src={banner_4} alt="1" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
