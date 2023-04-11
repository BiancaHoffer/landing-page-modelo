import { useState } from 'react';

interface TabsProps {
  borderColorActive?: 'blue800' | 'blue500' | 'orange500';
  textColorActive?: 'blue800' | 'blue500' | 'orange500';
  borderColor?: 'gray50' | 'blue980';
}

export function Tabs({
  borderColor = 'gray50',
  borderColorActive = 'blue800',
  textColorActive = 'blue800'
}: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabsData = [
    { label: 'Tab 1', content: '' },
    { label: 'Tab 2', content: '' },
  ];

  const variantBorderColorActive = {
    blue800: 'border-blue800',
    blue500: 'border-blue500',
    orange500: 'border-orange500',
  }

  const variantTextColorActive = {
    blue800: 'text-blue800',
    blue500: 'text-blue500',
    orange500: 'text-orange500',
  }

  const variantBorderColor = {
    gray50: 'border-gray50',
    blue980: 'border-blue980',
  }

  return (
    <div>
      <div className="flex">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`w-[124px] font-[900] py-2 border-b-4 transition-colors duration-300 ${idx === activeTabIndex
                ? `border-b-[4px] ${variantBorderColorActive[borderColorActive]} ${variantTextColorActive[textColorActive]}`
                : `${variantBorderColor[borderColor]} hover:border-gray-200 text-gray200`
                }`}
              onClick={() => setActiveTabIndex(idx)}>
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="py-4">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  )
}