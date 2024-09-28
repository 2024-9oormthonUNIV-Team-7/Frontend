import CategoryContentBox from 'components/box/CategoryContentBox';
import React from 'react';
import { Favorites } from 'types/Favorites.type'; // Favorites 타입을 가져옵니다.

interface MintSectionProps {
  favoriteList: Favorites[] | []; // favoriteList를 prop으로 받습니다.
}

const MintSection: React.FC<MintSectionProps> = ({ favoriteList }) => {
  // 최상위 3개 항목 선택
  const topFavorites = favoriteList.slice(0, 3);

  return (
    <div className="flex flex-col w-screen p-[20px] bg-green-50 gap-[16px] items-center">
      {topFavorites.length > 0 ? (
        topFavorites.map((item, index) => (
          <CategoryContentBox
            key={index}
            index={index}
            category={item.name || item.category} // 이름이 있으면 사용, 없으면 category 사용
            content={item.description || item.talk_description || '내용이 없습니다.'} // 내용이 없으면 기본 메시지
          />
        ))
      ) : (
        <div>즐겨찾기가 없습니다.</div> // 즐겨찾기가 없는 경우 메시지 표시
      )}
    </div>
  );
};

export default MintSection;
