import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SelectBar from 'components/Bar/SelectBar';
import PlanDiv from 'components/\bPlans/PlanDiv';
import MypageDiv from 'components/\bPlans/MypageDiv';
import { useQuery } from 'react-query';
import { FavoritesResponse } from 'types/FavoritesResponse.type';
import { getFavorite } from 'hooks/useFavorite';
import { Favorites } from 'types/Favorites.type';

const Plans: React.FC = () => {
  const history = useHistory();
  const [favoriteList, setFavoriteList] = useState<Favorites[]>([]);

  const [selected, setSelected] = useState<'plans' | 'mypage'>('plans'); // 기본 선택: 'plans'

  const { data, error, isLoading } = useQuery<FavoritesResponse, Error>('favorite', getFavorite, {
    refetchOnWindowFocus: false, // 창 포커스 시 재조회 방지
  });

  // useEffect(() => {
  //   if (data) {
  //     setFavoriteList(data.favorite);
  //   }
  // }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>; // UI에 에러 메시지 표시
  }

  const goToIce = () => {
    history.push(`/plans/ice-breaking`);
  };

  const goToSituation = () => {
    history.push(`/plans/content-recommendation`);
  };

  return (
    <div className="flex flex-col items-center">
      <SelectBar selected={selected} setSelected={setSelected} />
      {selected === 'plans' ? (
        <PlanDiv goToIce={goToIce} goToSituation={goToSituation} />
      ) : (
        <MypageDiv favoriteList={favoriteList} />
      )}
    </div>
  );
};

export default Plans;
