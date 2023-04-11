import { useState } from 'react';

interface TabsLineProps {
  activeColor?: 'blue800' | 'blue500' | 'orange500';
  bgColor?: 'gray50' | 'blue980';
}


export function TabsLine({ activeColor = 'blue800', bgColor = 'gray50' }: TabsLineProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabsData = [
    { content: '' },
    { content: '' },
    { content: '' },
  ];

  const variantActiveColor = {
    blue800: 'bg-blue800',
    blue500: 'bg-blue500',
    orange500: 'bg-orange500',
  }

  const variantBgColor = {
    gray50: 'bg-gray50',
    blue980: 'bg-blue980',
  }

  return (
    <div>
      <div className='flex'>
        {tabsData.map((tab, index) => {
          return (
            <button
              key={index}
              className={`w-[40px] h-[4px] mr-[10px] transition-colors duration-300 ${index === activeTabIndex
                ? `${variantActiveColor[activeColor]} rounded-[8px]`
                : `${variantBgColor[bgColor]} rounded-[8px]`
                }`}
              onClick={() => setActiveTabIndex(index)}>
            </button>
          );
        })}
      </div>
      <div className='py-4'>
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  )
}