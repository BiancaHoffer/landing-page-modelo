import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';

import mark from '../assets/mark.svg';
import minArrowGray from '../assets/min-arrow-gray.svg'
import minArrowOrange from '../assets/min-arrow-orange.svg'

export function Slide() {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className='flex px-[40px] w-[100%] max-w-[1216px] m-auto items-center justify-center sm:flex-col sm-[gap-40px]'>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className='bg-blue800 min-w-[50px] min-h-[50px] rounded-[50%] flex justify-center items-center sm:hidden'
      >
        <img src={minArrowOrange} />
      </button>
      <Swiper
        className='w-[100%] flex justify-center items-center'
        slidesPerView={3}

        loop={true}
        autoplay={{
          delay: 2000,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-gray600 max-w-[275px] min-h-[210px] rounded-[40px] shadow-xl my-[40px] mx-[23px]" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray600 max-w-[275px] min-h-[210px] rounded-[40px] shadow-xl my-[40px] mx-[23px]" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray600 max-w-[275px] min-h-[210px] rounded-[40px] shadow-xl my-[40px] mx-[23px]" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray600 max-w-[275px] min-h-[210px] rounded-[40px] shadow-xl my-[40px] mx-[23px]" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray600 max-w-[275px] min-h-[210px] rounded-[40px] shadow-xl my-[40px] mx-[23px]" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray600 max-w-[275px] min-h-[210px] rounded-[40px] shadow-xl my-[40px] mx-[23px]" />
        </SwiperSlide>
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className='bg-gray150 min-w-[50px] min-h-[50px] rounded-[50%] flex justify-center items-center sm:hidden'
      >
        <img src={minArrowGray} />
      </button>


      <div /*div buttons for mobile*/ className='hidden sm:flex gap-[40px]'>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className='bg-blue800 min-w-[50px] min-h-[50px] rounded-[50%] flex justify-center items-center'
        >
          <img src={minArrowOrange} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className='bg-gray150 min-w-[50px] min-h-[50px] rounded-[50%] flex justify-center items-center'
        >
          <img src={minArrowGray} />
        </button>
      </div>
    </div>
  )
}