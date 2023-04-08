import { useState } from 'react';
import { CardBlog } from "./CardBlog";

export function Blog() {
  const [itensPerPage, setItensPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const listBlog = [
    {
      id: 1,
      link: '',
      title: 'Crypto 1',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      content: 'Lorem ipsum dolor sit amet consectetur. Augue viverra sit ut iaculis diam scelerisque nisi metus.'
    },
    {
      id: 2,
      link: '',
      title: 'Crypto 2',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      content: 'Lorem ipsum dolor sit amet consectetur. Augue viverra sit ut iaculis diam scelerisque nisi metus.'
    },
    {
      id: 3,
      link: '',
      title: 'Crypto 2',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      content: 'Lorem ipsum dolor sit amet consectetur. Augue viverra sit ut iaculis diam scelerisque nisi metus.'
    },
    {
      id: 4,
      link: '',
      title: 'Crypto 4',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      content: 'Lorem ipsum dolor sit amet consectetur. Augue viverra sit ut iaculis diam scelerisque nisi metus.'
    },
    {
      id: 5,
      link: '',
      title: 'Crypto 5',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      content: 'Lorem ipsum dolor sit amet consectetur. Augue viverra sit ut iaculis diam scelerisque nisi metus.'
    },
    {
      id: 6,
      link: '',
      title: 'Crypto 6',
      subtitle: 'Lorem ipsum dolor sit amet consectetur.',
      content: 'Lorem ipsum dolor sit amet consectetur. Augue viverra sit ut iaculis diam scelerisque nisi metus.'
    },
  ]

  const pages = Math.ceil(listBlog.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = listBlog.slice(startIndex, endIndex);

  return (
    <div id='blog' className='bg-blue800 px-[40px] '>
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
          {currentItens.map(item => {
            return (
              <CardBlog
                key={item.id}
                link={item.link}
                title={item.title}
                subtitle={item.subtitle}
                text={item.content}
              />
            )
          })}
        </div>
        <div className='flex w-[100%] gap-[32px] justify-center items-center center mt-[80px]'>
          {Array.from(Array(pages), (item, index) => {
            return (
              <button
                value={index}
                // @ts-ignore
                onClick={(event) => setCurrentPage(Number(event.target.value))}
                className='text-white'
              >
                {index + 1}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}