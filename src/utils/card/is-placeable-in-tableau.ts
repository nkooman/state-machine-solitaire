import { Card } from '@/types';
import { isRed } from './is-red';

export const isPlacableInTableau = (card: Card, destination: Card): boolean => {
  const isOppositeColor = isRed(card) !== isRed(destination);
  const isLowerRank = card.rank < destination.rank;

  return isOppositeColor && isLowerRank;
};
