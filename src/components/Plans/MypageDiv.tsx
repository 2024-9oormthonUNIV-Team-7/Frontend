import MintSection from 'components/Mypage/MintSection';
import Profile from 'components/Mypage/Profile';
import Service from 'components/Mypage/Service';
import ShowMoreButton from 'components/Mypage/ShowMoreButton';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Favorites } from 'types/Favorites.type';

const MypageDiv: React.FC<{ favoriteList: Favorites[] | [] }> = ({ favoriteList }) => {
  const history = useHistory();

  const goToFav = () => {
    history.push('/favorite');
  };

  const goToMy = () => {
    history.push('/my-page');
  };

  return (
    <div className="flex flex-col items-center">
      <Profile colors="bg-white" />
      <ShowMoreButton category="즐겨찾기" onClick={goToFav} />
      <MintSection favoriteList={favoriteList} />
      <ShowMoreButton category="작성한 글" onClick={goToMy} />
      <MintSection favoriteList={favoriteList} />
      <Service />
    </div>
  );
};

export default MypageDiv;
