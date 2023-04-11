import { useState } from 'react';

interface TabsCircleProps {
  activeColor?: 'blue800' | 'blue500' | 'orange500';
  bgColor?: 'gray50' | 'gray200';
}

export function TabsCircle({ activeColor = 'blue800', bgColor = 'gray50' }: TabsCircleProps) {
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
    gray200: 'bg-gray200',
  }

  return (
    <div>
      <div className='flex items-center'>
        {tabsData.map((tab, index) => {
          return (
            <button
              key={index}
              className={`w-[8px] h-[8px] rounded-[50%] mr-[10px] transition-colors duration-300 ${index === activeTabIndex
                ? `${variantActiveColor[activeColor]} rounded-[50%] min-w-[10px] min-h-[10px]`
                : `${variantBgColor[bgColor]} rounded-[50%]`
                }`}
              onClick={() => setActiveTabIndex(index)}>
            </button>
          );
        })}
      </div>
      <div className='py-4'>
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div >
  )
}