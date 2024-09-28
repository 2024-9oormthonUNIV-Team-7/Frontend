import Tab from 'components/Tab/Tab';
import React, { useEffect, useState } from 'react';
import CategoryContentBox from 'components/box/CategoryContentBox'; // 경로에 맞게 수정
import NavBar from 'components/Bar/NavBar';
import { FavoritesResponse } from 'types/FavoritesResponse.type';
import { getFavorite } from 'hooks/useFavorite';
import { useQuery } from 'react-query';
import { Favorites } from 'types/Favorites.type';
import Nofavorite from 'components/Modal/Nofavorite';

const Favorite: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [favoriteList, setFavoriteList] = useState<Favorites[]>([]);

  const { data, error, isLoading } = useQuery<FavoritesResponse, Error>('favorite', getFavorite, {
    refetchOnWindowFocus: false, // 창 포커스 시 재조회 방지
  });

  useEffect(() => {
    if (data) {
      setFavoriteList(data.favorite);
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>; // UI에 에러 메시지 표시
  }

  const buttonTexts: string[] = ['전체', '밸런스 게임', '스몰토크 주제', '미니 게임'];

  const handleButtonClick = (index: number) => {
    setSelectedTab(index); // 클릭한 버튼의 인덱스를 상태로 저장
  };

  // 필터링된 즐겨찾기 리스트
  const filteredFavorites = () => {
    if (selectedTab === 0) {
      return favoriteList; // '전체'일 경우 모든 즐겨찾기 반환
    }

    const categoryMap: { [key: number]: string } = {
      1: 'balance_game', // '밸런스 게임'
      2: 'talk_subject', // '스몰토크 주제'
      3: 'mini_game', // '미니 게임'
    };

    const category = categoryMap[selectedTab];
    return favoriteList.filter((item) => item.category === category);
  };

  const filteredList = filteredFavorites();

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
          {filteredList.length > 0 ? (
            filteredList.map((item, index) => (
              <CategoryContentBox
                key={index}
                index={index}
                category={item.name || item.category} // 이름이 있으면 사용, 없으면 category 사용
                content={item.description || item.talk_description || '내용이 없습니다.'} // 내용이 없으면 기본 메시지
              />
            ))
          ) : (
            <div className="mt-[162px]">
              <Nofavorite />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
