import { useState, ChangeEvent } from 'react'

interface RadioGroupProps {
  radioColor?: 'blue500' | 'blue800' | 'white';
  bgColor?: 'blue980' | 'gray50';
}

export function RadioGroup({ radioColor = 'blue800', bgColor = 'gray50' }: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState("option1");

  const variantRadioColor = {
    blue800: 'checked:bg-blue800',
    blue500: 'checked:bg-blue500',
    white: 'checked:bg-white',
  }

  const variantBgColorRadio = {
    blue980: 'bg-blue900',
    gray50: 'bg-gray50',
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };


  return (
    <div className="flex flex-col space-y-2">
      <label className="flex items-center gap-[10px]">
        <div className={`${variantBgColorRadio[bgColor]} form-radio flex justify-center items-center cursor-pointer w-[24px] h-[24px] rounded-[50%]`}>
          <input
            type="radio"
            className={`${variantRadioColor[radioColor]} cursor-pointer appearance-none w-[14px] h-[14px] rounded-[50%]`}
            name="radio-group"
            value="option2"
            checked
            //checked={selectedValue === "option2"}
            onChange={handleChange}
          />
        </div>

        <div className={`${variantBgColorRadio[bgColor]} form-radio flex justify-center items-center cursor-pointer w-[24px] h-[24px] rounded-[50%]`}>
          <input
            type="radio"
            className={`${variantRadioColor[radioColor]} cursor-pointer appearance-none w-[14px] h-[14px] rounded-[50%]`}
            name="radio-group"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={handleChange}
          />
        </div>
      </label>
    </div>
  )
}