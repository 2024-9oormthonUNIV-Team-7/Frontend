import Tab from 'components/Tab/Tab';
import React, { useState } from 'react';
import CategoryContentBox from 'components/box/CategoryContentBox'; // 경로에 맞게 수정
import NavBar from 'components/Bar/NavBar';

interface ContentItem {
  category: string;
  content: string;
}

const Favorite: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const contentData: Record<string, ContentItem[]> = {
    전체: [
      { category: '카테고리1', content: '내용1' },
      { category: '카테고리2', content: '내용2' },
    ],
    '밸런스 게임': [
      { category: '게임1', content: '밸런스 게임 내용1' },
      { category: '게임2', content: '밸런스 게임 내용2' },
    ],
    '스몰토크 주제': [
      { category: '주제1', content: '스몰토크 내용1' },
      { category: '주제2', content: '스몰토크 내용2' },
    ],
    '미니 게임': [
      { category: '미니게임1', content: '미니 게임 내용1' },
      { category: '미니게임2', content: '미니 게임 내용2' },
    ],
  };

  const buttonTexts: string[] = ['전체', '밸런스 게임', '스몰토크 주제', '미니 게임'];

  const handleButtonClick = (index: number) => {
    setSelectedTab(index); // 클릭한 버튼의 인덱스를 상태로 저장
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar subject="즐겨찾기" nonIcon />
      <div className="flex flex-col items-center gap-[16px]">
        <Tab
          buttonTexts={buttonTexts}
          activeIndex={selectedTab} // 현재 선택된 탭의 인덱스 전달
          onButtonClick={handleButtonClick}
        />
        <div className="flex flex-col gap-[16px]">
          {contentData[buttonTexts[selectedTab]].map((item, index) => (
            <CategoryContentBox
              key={index}
              index={index}
              category={item.category}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
