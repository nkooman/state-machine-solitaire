import React, { ReactElement, useContext } from 'react';
import { GameStateContext } from '@/context';
import { getReadableCardName } from '@/utils/card';

export const Stock = (): ReactElement => {
  const { stock } = useContext(GameStateContext);

  return (
    <div className="stock">
      <h2>Stock</h2>
      <ul className="stock-cards">
        {stock.map((card) => (
          <li key={`${card.suit}|${card.rank}`} className="card">
            {getReadableCardName(card)}
          </li>
        ))}
      </ul>
    </div>
  );
};
