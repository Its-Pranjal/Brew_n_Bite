import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselImage from '../assets/Carouselmages/foodImage.jpg';
import pizzaImage from '../assets/Carouselmages/pizza.jpg';
import burger from '../assets/Carouselmages/burger.jpg';

const Carousel: React.FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      style={{ width: '100%', height: '100%', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <SwiperSlide>
        <img
          src={CarouselImage}
          alt="Carousel Image"
          style={{ display: 'block', width: '100%', maxHeight: '70vh', objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={pizzaImage}
          alt="Pizza Image"
          style={{ display: 'block', width: '100%', maxHeight: '70vh', objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={burger}
          alt="Burger Image"
          style={{ display: 'block', width: '100%', maxHeight: '70vh', objectFit: 'cover' }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
