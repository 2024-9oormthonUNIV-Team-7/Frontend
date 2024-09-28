import CategoryContentBox from 'components/box/CategoryContentBox';
import React from 'react';

const MintSection: React.FC = () => {
  return (
    <div className="flex flex-col w-screen p-[20px] bg-green-50 gap-[16px] items-center">
      <CategoryContentBox
        index={0}
        category="밸런스 게임"
        content="100억 받고 50살까지 살기 vs 100살 살고 그냥 살기"
      />
      <CategoryContentBox
        index={1}
        category="밸런스 게임"
        content="100억 받고 50살까지 살기 vs 100살 살고 그냥 살기"
      />
      <CategoryContentBox
        index={2}
        category="밸런스 게임"
        content="100억 받고 50살까지 살기 vs 100살 살고 그냥 살기"
      />
      {/* { favorites.length === 0 ? <Nofavorite/>} : ''*/}
    </div>
  );
};

export default MintSection;
