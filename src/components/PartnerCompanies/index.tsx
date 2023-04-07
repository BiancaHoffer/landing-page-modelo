import { useRef } from 'react';

import companie1 from '../../assets/companies1.svg';
import companie2 from '../../assets/companies2.svg';
import companie3 from '../../assets/companies3.svg';
import companie4 from '../../assets/companies4.svg';
import companie5 from '../../assets/companies5.svg';

import ArrowBackOrange from '../../assets/arrow-orange-back.svg';
import ArrowWhiteFront from '../../assets/arrow-white-front.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';

export function PartnerCompanies() {
  const swiperRef = useRef<SwiperType>();

  const imagesCompanies = [
    { img: companie1 },
    { img: companie2 },
    { img: companie3 },
    { img: companie4 },
    { img: companie5 },
    { img: companie1 },
    { img: companie2 },
    { img: companie3 },
    { img: companie4 },
    { img: companie5 },
  ];

  return (
    <div className='py-[65px] bg-blue800 px-[50px]'>
      <div>
        <Swiper
          className='flex items-center'
          loop={true}
          spaceBetween={40}
          autoplay={{
            delay: 5000,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 60
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 70
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 80
            },
          }}
        >
          {imagesCompanies.map((image, index) => {
            return (
              <SwiperSlide key={index} className='h-[100%] flex'>
                <div className='h-[100%]'>
                  <img src={image.img} className='w-[100%]' />
                </div>

              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className='flex gap-[50px] w-[100%] justify-center items-center mt-[60px]'>
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <img src={ArrowBackOrange} className='h-[32.83px] w-[64.83px]' />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <img src={ArrowWhiteFront} className='h-[32.83px] w-[64.83px]' />
        </button>
      </div>
    </div >
  )
}