import { useRef } from 'react';

import image from '../assets/image-banner.png';
import arrowBack from '../assets/arrow-back-blue.svg';
import arrowFront from '../assets/arrow-white-front.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';

import { Button } from './Button';

export function Banner() {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className='w-[100%] m-auto mt-[150px] bg-gray500 pt-[32px] pb-[130px] lg:pb-[72px] lg:pt-[32px]'>
      <Swiper
        className='bg-gray500'
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className='bg-gray500 px-[40px]'>
            <div className='flex flex-row w-[100%] max-w-[1216px] m-auto lg:flex-col lg:gap-[100px]'>
              <div className=' w-[50%] m-auto flex flex-col gap-[10px] lg:w-[100%] lg:items-center'>
                <p className='uppercase text-blue750 mb-[12px] text-[14px] tracking-[0.7rem] md:text-[12px] lg:text-center'>
                  LOREN IPSUM DOLOR SLIDE 1
                </p>
                <h1 className='text-white font-black text-[48px] tracking-[0.01rem] leading-[130%] font-sans mb-[48px] md:text-[36px] sm:text-[34px] lg:text-center'>
                  Donec imperdiet volutpat sem, eu tempus felis est hendrerit eu.
                </h1>
                <Button name='Saiba mais' />
              </div>
              <div className='flex justify-center items-center w-[50%] lg:w-[100%]'>
                <img src={image} className='w-[100%] self-center' />
              </div>
            </div>
            <div className='bg-orange500 absolute top-0 bottom-0 right-0 w-[140px] h-screen hidden'>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-gray500 px-[40px]'>
            <div className='flex flex-row w-[100%] max-w-[1216px] m-auto lg:flex-col lg:gap-[100px]'>
              <div className=' w-[50%] m-auto flex flex-col gap-[10px] lg:w-[100%] lg:items-center'>
                <p className='uppercase text-blue750 mb-[12px] text-[14px] tracking-[0.7rem] md:text-[12px] lg:text-center'>
                  LOREN IPSUM DOLOR SLIDE 1
                </p>
                <h1 className='text-white font-black text-[48px] tracking-[0.01rem] leading-[130%] font-sans mb-[48px] md:text-[36px] sm:text-[34px] lg:text-center'>
                  Donec imperdiet volutpat sem, eu tempus felis est hendrerit eu.
                </h1>
                <Button name='Saiba mais' />
              </div>
              <div className='flex justify-center items-center w-[50%] lg:w-[100%]'>
                <img src={image} className='w-[100%] self-center' />
              </div>
            </div>
            <div className='bg-orange500 absolute top-0 bottom-0 right-0 w-[140px] h-screen hidden'>
            </div>
          </div>
        </SwiperSlide>
        <div className='w-[100%] px-[40px] bg-gray500 mt-[100px] lg:mt-[80px]'>
          <div className='bg-gray500 flex gap-[53px] w-[100%] max-w-[1176px] m-auto lg:justify-center'>
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <img src={arrowBack} className='h-[32.83px] w-[64.83px]' />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <img src={arrowFront} className='h-[32.83px] w-[64.83px]' />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  )
}