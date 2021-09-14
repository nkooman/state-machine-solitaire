import { createContext } from 'react';
import { Card, GameState } from '@/types';
import { Suit } from '@/enums';

export const GameStateContext = createContext<GameState>({
  stock: [],
  foundations: new Map<Suit, Card[]>(),
  tableau: [],
});
