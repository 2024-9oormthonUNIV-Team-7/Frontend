import React, { useState } from 'react';
import titleContentsData from 'data/titleContentsData';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postFavorite } from 'hooks/useFavorite'; // postFavorite 함수 임포트

const NavBar: React.FC<{
  subject: string;
  nonIcon?: boolean;
  heart?: boolean;
  category?: string; // 카테고리 타입을 string으로 수정
  itemId?: number; // itemId 타입을 number로 수정
}> = ({ subject, nonIcon, heart, category, itemId }) => {
  const history = useHistory();
  const [isHearted, setIsHearted] = useState(false); // 하트 상태 관리

  const goBack = () => {
    history.go(-1);
  };

  const mutation = useMutation((data: { category: string; itemId: number }) => postFavorite(data));

  const handleHeartClick = async () => {
    setIsHearted((prev) => !prev); // 하트 상태 토글

    try {
      // category와 itemId를 직접 전달
      await mutation.mutateAsync({ category: category as string, itemId: itemId as number });
      console.log('Favorite updated successfully');
    } catch (error) {
      console.error('Error updating favorite:', error);
    }
  };

  return (
    <div className="flex py-[16px] justify-center items-center">
      <button type="button" className="absolute left-[20px]" onClick={goBack}>
        <img src="/assets/left_arrow.svg" alt="left_arrow" />
      </button>
      <div className="flex items-center justify-center gap-[4px]">
        {nonIcon ? (
          ''
        ) : (
          <img className="w-[20px] h-[20px]" src={`/assets/${subject}.svg`} alt={subject} />
        )}
        <p className="text-base text-center">
          {nonIcon ? subject : titleContentsData[subject].title}
        </p>
      </div>
      {heart && (
        <button type="button" className="absolute right-[20px]" onClick={handleHeartClick}>
          <img src={isHearted ? '/assets/red_heart.svg' : '/assets/heart.svg'} alt="heart" />
        </button>
      )}
    </div>
  );
};

export default NavBar;
