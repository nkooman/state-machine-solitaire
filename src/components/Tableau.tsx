import React, { ReactElement, useContext } from 'react';
import { GameStateContext } from '@/context';
import { getReadableCardName } from '@/utils/card';

export const Tableau = (): ReactElement => {
  const { tableau } = useContext(GameStateContext);
  return (
    <div className="tableau">
      <h2>Tableau</h2>
      {tableau.map((stack) => (
        <ul className="stack" key={Math.random()}>
          {stack.map((card) => (
            <li key={`${card.suit}|${card.rank}`} className="card">
              {getReadableCardName(card)}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
