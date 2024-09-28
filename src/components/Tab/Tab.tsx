import { XSmallButton } from '../Button/Button';
import { TabProps } from 'types/Tab.type';

export const Tab = ({ buttonTexts, activeIndex, onButtonClick }: TabProps) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hidden px-[20px] py-[10px]">
      <div className="flex flex-row justify-start items-center gap-[10px] whitespace-nowrap">
        {buttonTexts.map((text, index) => (
          <XSmallButton
            key={index}
            text={text}
            textColor="text-black" // 기본 텍스트 색상
            bgColor={activeIndex === index ? 'bg-main_primary' : 'bg-white'} // activeIndex에 따라 색상 변경
            onClick={() => onButtonClick(index)} // 버튼 클릭 시 부모 컴포넌트의 상태 업데이트
          />
        ))}
      </div>
    </div>
  );
};

export default Tab;
