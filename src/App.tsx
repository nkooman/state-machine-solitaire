import React, { ReactElement } from 'react';
import { GameStateContext } from '@/context';
import { Suit } from '@/enums';
import { Card } from '@/types';
import { Stock, Tableau } from '@/components';
import { getAllPossibleCards, shuffle } from './utils/card';

export const App = (): ReactElement => {
  const allPossibleCards = getAllPossibleCards();
  const shuffledCards = shuffle(allPossibleCards);
  // This will be mutated
  const cardsToDeal = shuffledCards.slice();
  const tableau = Array.from({ length: 7 }, (_, i) => i).map((index) =>
    cardsToDeal.splice(0, index + 1)
  );
  const stock = cardsToDeal.slice();

  return (
    <GameStateContext.Provider
      value={{
        stock,
        foundations: new Map<Suit, Card[]>(),
        tableau,
      }}
    >
      <h1>Solitaire</h1>
      <Stock />
      <Tableau />
    </GameStateContext.Provider>
  );
};
