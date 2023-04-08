import iconProduct1 from '../../assets/icon-product-1.svg';
import iconProduct2 from '../../assets/icon-product-2.svg';
import iconProduct3 from '../../assets/icon-product-3.svg';
import iconProduct4 from '../../assets/icon-product-4.svg';
import iconProduct5 from '../../assets/icon-product-5.svg';
import iconProduct6 from '../../assets/icon-product-6.svg';

import { CardProduct } from "./CardProduct";

export function Products() {
  return (
    <div id='products' className='bg-blue800 py-[130px] px-[40px] lg:py-[72px]'>
      <div className='bg-blue800 w-[100%] max-w-[1216px] m-auto'>
        <p className='uppercase tracking-[0.7rem] text-white text-[14px] leading-[130%] mb-1'>
          LOREN IPSUM DOLOR
        </p>
        <h2 className='text-orange500 font-black text-[48px] mb-[100px]'>
          Produtos
        </h2>
        <div className='grid gap-[160px] grid-cols-3 content-center sm:grid-cols-1 md:grid-cols-2 sm:gap-[100px] md:gap-[80px] xl:gap-[120px]'>
          <CardProduct
            img={iconProduct1}
            title='Volutpat Nibh'
            text='Lorem ipsum dolor sit amet consectetur. Volutpat nibh lectus eget enim eget quis nunc dolor. '
          />
          <CardProduct
            img={iconProduct2}
            title='Volutpat Nibh'
            text='Lorem ipsum dolor sit amet consectetur. Volutpat nibh lectus eget enim eget quis nunc dolor. '
          />
          <CardProduct
            img={iconProduct3}
            title='Volutpat Nibh'
            text='Lorem ipsum dolor sit amet consectetur. Volutpat nibh lectus eget enim eget quis nunc dolor. '
          />
          <CardProduct
            img={iconProduct4}
            title='Volutpat Nibh'
            text='Lorem ipsum dolor sit amet consectetur. Volutpat nibh lectus eget enim eget quis nunc dolor. '
          />
          <CardProduct
            img={iconProduct5}
            title='Volutpat Nibh'
            text='Lorem ipsum dolor sit amet consectetur. Volutpat nibh lectus eget enim eget quis nunc dolor. '
          />
          <CardProduct
            img={iconProduct6}
            title='Volutpat Nibh'
            text='Lorem ipsum dolor sit amet consectetur. Volutpat nibh lectus eget enim eget quis nunc dolor. '
          />
        </div>
      </div>
    </div>
  )
}