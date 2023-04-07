import { useRef } from 'react';

import { CardAboutUs } from "./CardAboutUs";

import arrowOrangeBack from '../../assets/arrow-orange-back.svg';
import arrowBlueFront from '../../assets/arrow-blue-front.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Pagination } from 'swiper';
import 'swiper/css';


export function AboutUs() {
  const swiperRef = useRef<SwiperType>();

  return (
    <>
      <div className='bg-gray100 px-[40px]'>
        <div className='flex justify-center flex-col bg-gray100 w-[100%] py-[130px] max-w-[1216px] m-auto lg:py-[72px]'>
          <p className='uppercase tracking-[0.7rem] text-blue800 text-[14px] leading-[130%] mb-1'>
            LOREN IPSUM DOLOR
          </p>
          <h2 className='text-orange500 font-black text-[48px] mb-[70px] leading-[130%]'>
            Quem somos
          </h2>

          <Swiper
            className='w-[100%] max-w-[1176px]'
            slidesPerView={4}
            loop={true}
            modules={[Navigation, Pagination]}

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
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <CardAboutUs
                business='Developer'
                name='Joan Naoj'
                img=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardAboutUs
                business='Developer'
                name='Joan Naoj'
                img=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardAboutUs
                business='Developer'
                name='Joan Naoj'
                img=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardAboutUs
                business='Developer'
                name='Joan Naoj'
                img=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardAboutUs
                business='Developer'
                name='Joan Naoj'
                img=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardAboutUs
                business='Developer'
                name='Joan Naoj'
                img=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardAboutUs
                business='Developer'
                name='Joan Naoj'
                img=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardAboutUs
                business='Developer'
                name='Joan Naoj'
                img=''
              />
            </SwiperSlide>
          </Swiper>
          <div className='bg-transparent flex justify-center gap-[53px] w-[100%] max-w-[1176px] m-auto mt-[60px]'>
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <img src={arrowOrangeBack} className='h-[32.83px] w-[64.83px]' />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <img src={arrowBlueFront} className='h-[32.83px] w-[64.83px]' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}