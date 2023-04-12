import arrowSend from '../assets/arrow-white-send.svg'

interface InpurProps {
  type: string;
  placeholder: string;
  buttonColor?: 'blue800' | 'blue500' | 'orange500';
  textColor?: 'white' | 'blue800';
  bgInput?: 'gray50' | 'blue980';
}

export function Input({
  type,
  placeholder,
  buttonColor = 'blue800',
  textColor = 'blue800',
  bgInput = 'gray50'
}: InpurProps) {
  const variantButtonColor = {
    blue800: 'bg-blue800',
    blue500: 'bg-blue500',
    orange500: 'bg-orange500',
  }

  const variantTextColor = {
    white: 'text-white',
    blue800: 'text-blue800',
  }

  const variantBgInput = {
    gray50: 'bg-gray50',
    blue980: 'bg-blue980',
  }

  return (
    <>
      <input
        className={`${variantBgInput[bgInput]} ${variantTextColor[textColor]} w-[100%] max-w-[480px] rounded-[40px] h-[50px] font-[14px] border-none px-[22px] flex justify-start outline-none shadow-lg`}
        type={type}
        placeholder={placeholder}
      />

      <div className={`${variantBgInput[bgInput]} flex justify-between items-center gap-[22px] w-[100%] max-w-[480px] rounded-[40px] h-[50px] 0 border-none pr-[8px] pl-[22px]  shadow-lg`}>
        <input
          type={type}
          placeholder={placeholder}
          className={`${variantBgInput[bgInput]} ${variantTextColor[textColor]} font-[14px] rounded-[40px] border-none outline-none w-[90%]`}
        />
        <button className={`${variantButtonColor[buttonColor]} flex justify-center items-center min-w-[40px] h-[40px] rounded-[100%]`}>
          <img src={arrowSend} />
        </button>
      </div>
    </>

  )
}