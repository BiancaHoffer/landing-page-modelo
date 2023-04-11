import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { MdKeyboardArrowDown } from 'react-icons/md';

interface DrowdownProps {
  textColor?: 'blue800' | 'white';
  bgDropdown?: 'gray50' | 'blue800';
  hoverColor?: 'blue980' | 'blue800' | 'blue500';
  hoverText?: 'orange500' | 'white';
  iconColor?: 'blue800' | 'blue500' | 'orange500';
}

export function Dropdown({
  textColor = 'blue800',
  bgDropdown = 'gray50',
  hoverColor = 'blue800',
  hoverText = 'white',
  iconColor = 'blue800',
}: DrowdownProps) {
  const [selected, setSelected] = useState([]);

  const itens = [
    { item: 'Item 1' },
    { item: 'Item 2' },
  ]

  const variantTextColor = {
    blue800: 'text-blue800',
    white: 'text-white',
  }

  const variantHoverColor = {
    blue980: 'hover:bg-blue980',
    blue800: 'hover:bg-blue800',
    blue500: 'hover:bg-blue500',
  }

  const variantHoverTextColor = {
    orange500: 'hover:text-orange500',
    white: 'hover:text-white',
  }

  const variantDropdownColor = {
    gray50: 'bg-gray50',
    blue800: 'bg-blue900',
  }

  const variantIconColor = {
    blue800: '#1C3747',
    blue500: '#002BFF',
    orange500: '#EB6500',
  }

  return (
    <div className="w-[200px]">
      <Listbox value={selected} onChange={setSelected}>
        <div className="">
          <Listbox.Button className={`${variantTextColor[textColor]} ${variantDropdownColor[bgDropdown]} font-[500] cursor-default h-[50px] min-w-[200px] px-[20px] mb-[8px] flex justify-between items-center rounded-[40px] text-left sm:text-sm`}>
            <span>Dropdown</span>
            <MdKeyboardArrowDown size={22} color={variantIconColor[iconColor]} />
          </Listbox.Button>
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={`${variantDropdownColor[bgDropdown]} absolute min-w-[200px] p-[8px] flex justify-start items-start flex-col rounded-[15px] text-base focus:outline-none sm:text-sm`}>
              {itens.map((i, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none w-[100%] ${active ? 'bg-amber-100 text-amber-900' : `${variantTextColor[textColor]}`
                    }`
                  }
                  value={i}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`${variantHoverColor[hoverColor]} ${variantHoverTextColor[hoverText]} hover:rounded-[10px] p-[8px] block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {i.item}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          A
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}