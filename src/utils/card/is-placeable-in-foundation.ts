import { Card } from '@/types';

export const isPlacableInFoundation = (card: Card, destination: Card): boolean => {
  const isSameSuit = card.suit === destination.suit;
  const isOneLower = card.rank === destination.rank - 1;

  return isSameSuit && isOneLower;
};
