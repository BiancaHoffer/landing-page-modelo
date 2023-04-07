import { CardBlog } from "./CardBlog";

export function Blog() {
  return (
    <div className='bg-blue800 px-[40px] '>
      <div className='flex justify-center flex-col bg-blue800 w-[100%] py-[130px] max-w-[1216px] m-auto lg:py-[72px]'>
        <p className='uppercase tracking-[0.7rem] text-white text-[14px] leading-[130%] mb-1'>
          LOREN IPSUM DOLOR
        </p>
        <h2 className='text-orange500 font-black text-[48px] mb-[70px] leading-[130%]'>
          Blog
        </h2>

        <div className='grid grid-cols-3 gap-[62px] 
        lg:grid-cols-2 md:grid-cols-1
        '>
          <CardBlog
            link='#'
            title='Crypto'
            subtitle='Lorem ipsum dolor sit amet consectetur.'
            text='Lorem ipsum dolor sit amet consectetur. Augue viverra sit ut iaculis diam scelerisque nisi metus.'
          />
          <CardBlog
            link='#'
            title='Crypto'
            subtitle='Lorem ipsum dolor sit amet consectetur.'
            text='Lorem ipsum dolor sit amet consectetur. Augue viverra sit ut iaculis diam scelerisque nisi metus.'
          />
          <CardBlog
            link='#'
            title='Crypto'
            subtitle='Lorem ipsum dolor sit amet consectetur.'
            text='Lorem ipsum dolor sit amet consectetur. Augue viverra sit ut iaculis diam scelerisque nisi metus.'
          />
        </div>
        <div className='flex gap-[32px] text-[16] font-[400] text-white w-100% items-centes justify-center mt-[80px]'>
          <span className='font-[700] flex justify-center items-center bg-orange500 rounded-[50%] w-[28px] h-[28px]'>
            1
          </span>
          <span>
            2
          </span>
          <span>
            3
          </span>
          <span>
            ...
          </span>
          <span>
            {`>`}
          </span>
        </div>

      </div>
    </div>
  )
}