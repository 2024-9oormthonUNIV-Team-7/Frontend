import { AddFavoriteResponse } from 'types/AddFavoriteResponse.type';
import { defaultAxios } from '../axios/defaultAxios'; // 상대 경로로 수정
import { FavoritesResponse } from 'types/FavoritesResponse.type';

// 여러 props를 받아오는 함수
export const postFavorite = async ({
  category,
  itemId,
}: {
  category: string;
  itemId: number;
}): Promise<AddFavoriteResponse> => {
  const requestBody = {
    email: 'john@example.com',
    category, // category를 props에서 받아와 사용
    itemId, // itemId를 props에서 받아와 사용
  };

  const response = await defaultAxios.post('/api/v1/post-favorite', requestBody);
  return response.data;
};

export const getFavorite = async (): Promise<FavoritesResponse> => {
  const response = await defaultAxios.get<FavoritesResponse>(
    `/api/v1/find-favorite/${localStorage.getItem('googleId')}`,
  );
  return response.data;
};
