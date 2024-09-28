import React, { useState } from 'react';
import ExpandedBox from 'components/box/ExpandedBox';
import NavBar from 'components/Bar/NavBar';

const ContentRecommendation: React.FC = () => {
  const [activeBoxIndex, setActiveBoxIndex] = useState<number>(0); // 기본값으로 첫 번째 박스 활성화

  const handleBoxClick = (index: number) => {
    setActiveBoxIndex(index); // 클릭한 박스의 인덱스로 상태 업데이트
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar subject="아이스브레이킹" nonIcon heart />
      <div className="absolute bottom-[47px] flex flex-col justify-center items-center">
        <img className="mb-[-45px]" src="/assets/Char/lip.svg" alt="cloud_lip" />
        <div className="flex flex-col justify-center items-center gap-y-[16px]">
          {[
            { title: 'drink', url: '/plans/content-recommendation/drinking' },
            { title: 'team', url: '/plans/content-recommendation/team-project' },
            { title: 'networking', url: '/plans/content-recommendation/networking-party' },
          ].map((item, index) => (
            <ExpandedBox
              key={item.title}
              title={item.title}
              color="main"
              isClick={activeBoxIndex !== index}
              onClick={() => handleBoxClick(index)}
              redirectUrl={item.url} // URL 전달
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRecommendation;
