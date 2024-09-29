import { Favorites } from './Favorites.type';

export interface FavoritesResponse {
  favorite: Favorites[];
  status: number;
  message: string;
}
