import { Rank, Suit } from '@/enums';
import { Card } from '@/types';

export const getReadableCardName = ({ rank, suit }: Card): string =>
  `${Rank[rank]} of ${Suit[suit]}`;
