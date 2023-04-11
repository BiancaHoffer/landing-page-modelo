import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';

import mark from '../assets/mark.svg';
import minArrowGray from '../assets/min-arrow-gray.svg'
import minArrowOrange from '../assets/min-arrow-orange.svg'

export function ReviewSlide() {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className='flex px-[40px] w-[100%] max-w-[1216px] m-auto items-center justify-center sm:flex-col sm:[gap-40px]'>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className='bg-blue800 min-w-[50px] min-h-[50px] rounded-[50%] flex justify-center items-center sm:hidden'
      >
        <img src={minArrowOrange} />
      </button>
      <Swiper
        className='w-[100%]'
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="flex justify-between items-center lg:gap-[40px] lg:flex-col m-auto my-[40px] p-[12px] lg:py-[40px] max-w-[970px] min-h-[390px] rounded-[40px] bg-white shadow-xl">
            <div className="rounded-[40px] bg-gray600 min-w-[315px] min-h-[370px] lg:max-w-[315px]" />
            <div className='flex items-center justify-center w-[100%]'>
              <div className='flex justify-center items-center flex-col gap-[38px] max-w-[400px]'>
                <img src={mark} />
                <p className="text-center text-[18px] leading-[35px] translate-[-0.656526px]">
                  I cannot believe that I have got a brand new system after getting We R Tek services. It was super easy to edit and publish.
                </p>
                <span>
                  <p className='text-orange500 font-[700] text-[21px]'>Jonathan Taylor</p>
                  <p className='text-center'>CEO at Client</p>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center lg:gap-[40px] lg:flex-col m-auto my-[40px] p-[12px] lg:py-[40px] max-w-[970px] min-h-[390px] rounded-[40px] bg-white shadow-xl">
            <div className="rounded-[40px] bg-gray600 min-w-[315px] min-h-[370px] lg:max-w-[315px]" />
            <div className='flex items-center justify-center w-[100%]'>
              <div className='flex justify-center items-center flex-col gap-[38px] max-w-[400px]'>
                <img src={mark} />
                <p className="text-center text-[18px] leading-[35px] translate-[-0.656526px]">
                  I cannot believe that I have got a brand new system after getting We R Tek services. It was super easy to edit and publish.
                </p>
                <span>
                  <p className='text-orange500 font-[700] text-[21px]'>Jonathan Taylor</p>
                  <p className='text-center'>CEO at Client</p>
                </span>
              </div>
            </div>
          </div>
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