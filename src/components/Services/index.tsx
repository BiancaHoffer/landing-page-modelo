import { useRef } from 'react';

import { CardServices } from "./CardServices";

import iconServices1 from '../../assets/icon-services-1.svg';
import iconServices2 from '../../assets/icon-services-2.svg';
import ArrowFront from '../../assets/arrow-white-front.svg';

import ArrowBackOrange from '../../assets/arrow-orange-back.svg';
import ArrowWhiteFront from '../../assets/arrow-white-front.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';

export function Services() {
  const swiperRef = useRef<SwiperType>();
  return (
    <>
      <div id='services' className="bg-blue800 py-[130px] px-[40px] lg:py-[72px]">
        <div className="bg-blue800 w-[100%] max-w-[1216px] m-auto">
          <div>
            <p className='uppercase tracking-[0.7rem] text-white text-[14px] leading-[130%] mb-1'>
              LOREN IPSUM DOLOR
            </p>
            <h2 className='text-orange500 font-black text-[48px] mb-[100px]'>
              Serviços
            </h2>
          </div>

          <div className="flex xl:flex-col justify-center items-center">
            <div className="flex w-[100%] lg:flex-col">
              <Swiper
                className='bg-blue800 flex w-[100%]'
                slidesPerView={2}
                spaceBetween={40}
                autoplay={{
                  delay: 2000,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1
                  },
                  640: {
                    slidesPerView: 1,
                  },
                  900: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <CardServices
                    img={iconServices1}
                    title='Serviço 1'
                    text='Donec imperdiet volutpat sem, eu tempus felis est hendrerit eu. Suspendisse fringilla gravida leo facilisis venenatis. Maecenas eget euismod velit maecenas. '
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardServices
                    img={iconServices2}
                    title='Serviço 2'
                    text='Donec imperdiet volutpat sem, eu tempus felis est hendrerit eu. Suspendisse fringilla gravida leo facilisis venenatis. Maecenas eget euismod velit maecenas. '
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardServices
                    img={iconServices1}
                    title='Serviço 1'
                    text='Donec imperdiet volutpat sem, eu tempus felis est hendrerit eu. Suspendisse fringilla gravida leo facilisis venenatis. Maecenas eget euismod velit maecenas. '
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CardServices
                    img={iconServices2}
                    title='Serviço 2'
                    text='Donec imperdiet volutpat sem, eu tempus felis est hendrerit eu. Suspendisse fringilla gravida leo facilisis venenatis. Maecenas eget euismod velit maecenas. '
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="ml-[20px] flex items-center justify-start bg-[url('./assets/background-arrow.svg')] bg-no-repeat w-[200px] h-[368.5px] xl:hidden">
              <button onClick={() => swiperRef.current?.slideNext()}>
                <img src={ArrowFront} className='h-[32.83px] top-[200px] pl-[30px] cursor-pointer' />
              </button>
            </div>
            <div className='gap-[50px] w-[100%] justify-center items-center mt-[60px] hidden xl:flex '>
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <img src={ArrowBackOrange} className='h-[32.83px] w-[64.83px]' />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <img src={ArrowWhiteFront} className='h-[32.83px] w-[64.83px]' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}