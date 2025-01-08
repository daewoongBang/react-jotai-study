import { atom } from 'jotai';

export interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}

export const toDosAtom = atom<IToDo[]>([]);
