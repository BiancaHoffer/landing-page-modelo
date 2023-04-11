import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

interface ButtonsArrowProps {
  borderColor?: 'orange500' | 'blue800' | 'blue500';
  iconColor?: 'white' | 'blue800';
}

export function ButtonsArrow({ borderColor = 'blue800', iconColor = 'blue800' }: ButtonsArrowProps) {
  const variantBorderColor = {
    orange500: 'border-orange500',
    blue800: 'border-blue800',
    blue500: 'border-blue500',
  }

  const variantIconColor = {
    blue800: '#1C3747',
    white: '#ffff'
  }

  return (
    <div className="flex gap-[10px]">
      <button className={`bg-none border-2 ${variantBorderColor[borderColor]} min-h-[50px] min-w-[50px] rounded-[100%] flex justify-center items-center`}>
        <MdArrowBackIosNew size={22} color={`${variantIconColor[iconColor]}`} />
      </button>

      <button className={`bg-none border-2 ${variantBorderColor[borderColor]} min-h-[50px] min-w-[50px] rounded-[100%] flex justify-center items-center`}>
        <MdArrowForwardIos size={22} color={`${variantIconColor[iconColor]}`} />
      </button>
    </div>
  )
}