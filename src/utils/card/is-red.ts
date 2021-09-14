import { Suit } from '@/enums';
import { Card } from '@/types';

export const isRed = (card: Card): boolean =>
  card.suit === Suit.Hearts || card.suit === Suit.Diamonds;
