import { Balancegame } from '../types/Balancegame.type';

export interface BalancegameResponse {
  balance_games: Balancegame[];
  status: number;
  message: string;
}
