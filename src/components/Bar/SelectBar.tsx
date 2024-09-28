import React, { useEffect, useState } from 'react';

const SelectBar: React.FC<{
  selected: 'plans' | 'mypage';
  setSelected: (selection: 'plans' | 'mypage') => void;
}> = ({ selected, setSelected }) => {
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  const handleSelect = (selection: 'plans' | 'mypage') => {
    setSelected(selection);
  };

  useEffect(() => {
    const selectedElement = document.getElementById(selected); // 선택된 요소의 ID로 가져오기
    if (selectedElement) {
      const { offsetLeft, clientWidth } = selectedElement;
      setIndicatorPosition(offsetLeft + clientWidth / 2 - 15); // 인디케이터 중앙 위치 조정
    }
  }, [selected]);

  return (
    <div className="relative flex w-full py-[8px] mb-[32px] text-gray-500 justify-between items-center border border-x-0 border-t-0 border-b-gray-500">
      <div
        className="absolute w-[30px] h-[2px] bg-txt_primary"
        style={{ left: `${indicatorPosition}px`, top: '100%', transition: 'left 0.3s ease' }} // border-bottom과 겹치도록 위치 조정
      ></div>
      <div
        id="plans"
        className={`relative w-1/2 text-center cursor-pointer ${selected === 'plans' ? 'text-txt_primary' : ''}`}
        onClick={() => handleSelect('plans')}
      >
        플랜 둘러보기
      </div>
      <div
        id="mypage"
        className={`relative w-1/2 text-center cursor-pointer ${selected === 'mypage' ? 'text-txt_primary' : ''}`}
        onClick={() => handleSelect('mypage')}
      >
        My Page
      </div>
    </div>
  );
};

export default SelectBar;
