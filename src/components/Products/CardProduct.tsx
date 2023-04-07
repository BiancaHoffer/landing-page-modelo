interface CardProductProps {
  img: string;
  title: string;
  text: string;
}

export function CardProduct({ img, title, text }: CardProductProps) {
  return (
    <div className="flex gap-[24px] flex-col items-center justify-center  w-[100%] max-w-[293.44px] m-auto">
      <div className="flex items-center justify-center bg-white w-[82.31px] h-[82.31px] rounded-full">
        <img src={img} />
      </div>

      <h3 className="text-white text-[24px] font-black">{title}</h3>

      <p className="text-white text-center leading-[28px]">{text}</p>
    </div>
  )
}