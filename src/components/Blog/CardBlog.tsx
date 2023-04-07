import imageBlogExample from '../../assets/image-blog-example.png'

interface CardBlogProps {
  link: string;
  title: string;
  subtitle: string;
  text: string
}

export function CardBlog({ link, subtitle, text, title }: CardBlogProps) {
  return (
    <div className='flex flex-col items-center justify-center w-[100%]'>
      <img src={imageBlogExample} className='rounded-t-[8px] ' />
      <div className='bg-gray200 rounded-b-lg max-w-[392px] mt-[-3px] p-[30px]'>
        <a
          href={link}
          className='uppercase underline text-[14px] font-[600]'
        >
          {title}
        </a>
        <div className='mt-[15px]'>
          <h3 className='text-white text-[20px] font-[700] leading-[25px] pb-[8px] uppercase'>
            {subtitle}
          </h3>
          <p className='text-[14px] leading-[20px]'>
            {text}
          </p>
        </div>
        <a
          href={link}
          className='block text-white w-[100%] mt-[27px] text-[16px] font-[900] text-end'
        >
          {`Ler mais >`}
        </a>
      </div>
    </div>

  )
}