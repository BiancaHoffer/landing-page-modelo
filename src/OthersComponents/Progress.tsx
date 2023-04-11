interface ProgreeBarProps {
  progressPercentage: number;
  bgColor?: 'blue980' | 'gray50';
  progressColor?: 'blue500' | 'blue800' | 'orange500';
}

export function ProgressBar({
  progressPercentage,
  bgColor = 'gray50',
  progressColor = 'blue800'
}: ProgreeBarProps) {
  const variantBgColor = {
    blue980: 'bg-blue980',
    gray50: 'bg-gray50',
  }

  const variantProgressColor = {
    blue500: 'bg-blue500',
    blue800: 'bg-blue800',
    orange500: 'bg-orange500',
  }

  return (
    <div className={`${variantBgColor[bgColor]} w-[248px] h-[8px] rounded-[40px]`}>
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full ${progressPercentage < 70 ? `${variantProgressColor[progressColor]} rounded-[40px]` : 'bg-gray500  rounded-[40px]'}`}>
      </div>
    </div>
  )
}