interface ButtonProps {
  name: string;
  onClick?: () => void;
  disabled?: boolean;
  bgColor?: 'blue800' | 'blue500' | 'orange500'
  hoverColor?: 'gray150' | 'white' | 'blue750';
  disabledColor?: 'gray200' | 'blue200' | 'orange200';
  borderColor?: 'blue800' | 'blue500' | 'orange500';
  textHoverColor?: 'blue800' | 'blue500' | 'white';
}

export function Button({
  name,
  onClick,
  disabled = false,
  bgColor = 'blue800',
  hoverColor = 'gray150',
  disabledColor = 'gray200',
  borderColor = 'blue800',
  textHoverColor = 'blue800',
  ...rest
}: ButtonProps) {
  const variantBgColor = {
    blue800: 'bg-blue800',
    blue500: 'bg-blue500',
    orange500: 'bg-orange500'
  }

  const variantHoverColor = {
    gray150: 'hover:bg-gray150',
    white: 'hover:bg-white',
    blue750: 'hover:bg-blue750'
  }

  const variantDisabledColor = {
    gray200: 'disabled:bg-gray200',
    blue200: 'disabled:bg-blue200',
    orange200: 'disabled:bg-orange200'
  }

  const variantBorderColor = {
    blue800: 'border-blue800',
    blue500: 'border-blue500',
    orange500: 'border-orange500'
  }

  const varianTextHoverColor = {
    blue800: 'hover:text-blue800',
    blue500: 'hover:text-blue500',
    white: 'hover:text-white'
  }

  return (
    <button
      onClick={onClick}
      className={`text-white ${variantBgColor[bgColor]} ${varianTextHoverColor[textHoverColor]} border-2 hover:${variantBorderColor[borderColor]} ${variantBorderColor[borderColor]} ${variantHoverColor[hoverColor]} ${variantDisabledColor[disabledColor]} disabled:border-none disabled:text-gray50 w-[316px] h-[80px] rounded-[48px] uppercase tracking-[0.7rem] text-[14px] shadow-xl transition-colors disabled:cursor-not-allowed`}
      disabled={disabled}
      {...rest}
    >
      {name}
    </button>
  )
}