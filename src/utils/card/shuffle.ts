import { Card } from '@/types';

export const shuffle = (cards: Card[]): Card[] => cards.slice().sort(() => Math.random() - 0.5);
