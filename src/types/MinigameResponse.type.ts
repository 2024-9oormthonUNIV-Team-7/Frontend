import { Minigame } from './Minigame.type';

export interface MinigameResponse {
  mini_game: Minigame[];
  status: number;
  message: string;
}
