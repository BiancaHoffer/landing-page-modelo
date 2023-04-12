import { FiCheck } from 'react-icons/fi';

interface CheckboxProps {
  variantBgCheckboxColor?: 'gray50' | 'blue980';
  variantCheckboxColor?: 'blue500' | 'blue800' | 'orange500';
  variantIconColor?: 'gray50' | 'blue980';
}

export function Checkbox({
  variantCheckboxColor = 'blue800',
  variantBgCheckboxColor = 'gray50',
  variantIconColor = 'gray50'
}: CheckboxProps
) {
  const variantsBgCheckboxColor = {
    gray50: 'bg-gray50',
    blue980: 'bg-blue900',
  }

  const variantsCheckboxColor = {
    blue500: 'checked:bg-blue500',
    blue800: 'checked:bg-blue900',
    orange500: 'checked:bg-orange500',
  }

  const variantsIconColor = {
    gray50: '#F2F1F5',
    blue980: '#262837',
  }

  return (
    <div>
      <label className="cursor-pointer relative">
        <input type="checkbox" className={`bg-gray50 ${variantsBgCheckboxColor[variantBgCheckboxColor]} ${variantsCheckboxColor[variantCheckboxColor]} peer appearance-none  w-[24px] h-[24px] rounded-sm `} />
        <FiCheck width={22} color={`${variantsIconColor[variantIconColor]}`} className='absolute left-1 bottom-[9px] right-1 text-opacity-0' />
      </label>
    </div>
  )
}