import { Suit } from '@/enums';
import { Card } from './card';

export type GameState = {
  stock: Card[];
  tableau: Card[][];
  foundations: Map<Suit, Card[]>;
};
