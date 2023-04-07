interface ButtonProps {
  name: string;
}

export function Button({ name, ...rest }: ButtonProps) {
  return (
    <button
      className='bg-blue800 w-[316px] h-[96px] rounded-[48px] text-white uppercase tracking-[0.7rem] text-[14px] shadow-xl  hover:bg-gray200 transition'
      {...rest}
    >
      {name}
    </button>
  )
}