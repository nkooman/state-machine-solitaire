import { Suit } from '@/enums';
import { Card } from '@/types';

export const isBlack = (card: Card): boolean => {
  return card.suit === Suit.Clubs || card.suit === Suit.Spades;
};
