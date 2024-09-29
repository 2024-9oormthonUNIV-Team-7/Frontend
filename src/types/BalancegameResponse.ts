import { Balancegame } from '../types/Balancegame.type';

export interface BalancegameResponse {
  balance_game: Balancegame[];
  status: number;
  message: string;
}
