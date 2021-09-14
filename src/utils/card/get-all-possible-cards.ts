import { Rank, Suit } from '@/enums';
import { Card } from '@/types';
import { enumerateKeys } from '../enum';

export const getAllPossibleCards = (): Card[] => {
  const suits = enumerateKeys(Suit);
  const ranks = enumerateKeys(Rank);

  return suits.flatMap((suit) => {
    return ranks.map((rank) => {
      return {
        rank: Rank[rank],
        suit: Suit[suit],
      } as Card;
    });
  });
};
