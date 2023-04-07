interface CardAboutUs {
  business: string;
  name: string;
  img: string
}

export function CardAboutUs({ business, name, img }: CardAboutUs) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-gray150 rounded-[50%] w-[168.58px] h-[168.58px] mb-[30px]">
        <img src={img} />
      </div>
      <div className="flex justify-center flex-col items-center">
        <span className="text-blue800 text-[14px] leading-[130%] mb-[8px]">{business}</span>
        <h3 className="text-orange500 text-[24px] font-[900] leading-[130%]">{name}</h3>
      </div>
    </div>

  )
}