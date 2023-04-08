import arrowFront from '../../assets/arrow-white-front.svg';

interface CardServicesProps {
  img: string;
  title: string;
  text: string;
}

export function CardServices({ img, title, text }: CardServicesProps) {
  return (
    <div className="flex flex-col border-[2px] border-orange500 rounded-[50px] px-[32px] py-[72px] w-[100%] lg:items-center">
      <img src={img} className='w-[147px] h-[111.33px] mb-[78px] sm:w-[120px] md:mb-[40px]' />
      <div className='mb-[100px] md:mb-[52px]'>
        <h3 className='text-[26px] font-[600] text-white mb-[50px] lg:text-center'>
          {title}
        </h3>
        <p className='text-white leading-[200%] tracking-[0.01rem] text-[18px] lg:text-center'>
          {text}
        </p>
      </div>
      <img src={arrowFront} className='w-[59.83px] h-[32.83px] cursor-pointer' />
    </div>
  )
}