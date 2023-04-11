import { useState } from 'react'

interface SwitchpProps {
  disabledSwitchColor?: 'gray100' | 'blue980';
  bgColor?: 'gray50' | 'blue900';
  ableSwitchColor?: 'blue500' | 'blue800' | 'orange500';
}

export function Switch({
  disabledSwitchColor = 'gray100',
  bgColor = 'gray50',
  ableSwitchColor = 'blue800'
}: SwitchpProps) {
  const [enabled, setEnabled] = useState(false);

  const variantsDisabledSwitchColor = {
    gray100: 'after:bg-gray100',
    blue980: 'after:bg-blue980',
  }

  const variantsBgSwitchColor = {
    gray50: 'bg-gray50',
    blue900: 'bg-blue900',
  }

  const variantsAbleSwitchColor = {
    blue500: 'peer-checked:after:bg-blue500',
    blue800: 'peer-checked:after:bg-blue800',
    orange500: 'peer-checked:after:bg-orange500',
  }

  return (
    <>
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className={`w-[50px] h-[30px] ${variantsBgSwitchColor[bgColor]} ${variantsAbleSwitchColor[ableSwitchColor]} ${variantsDisabledSwitchColor[disabledSwitchColor]} rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[2px]  after:rounded-full after:h-[20px] after:w-[20px] after:m-[3px] after:transition-all peer-checked:bg-green-600`}
          ></div>
        </label>
      </div>
    </>
  )
}