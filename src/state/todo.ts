import { atom } from 'jotai';

export const FILTER = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  INCOMPLETED: 'INCOMPLETED',
};

export type ToDoFilterType = keyof typeof FILTER;

export interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}

export const filterType = atom<ToDoFilterType>('ALL');

export const toDosAtom = atom<IToDo[]>([]);

export const filteredToDos = atom<IToDo[]>((get) => {
  const selectedFilterType = get(filterType);

  return get(toDosAtom).filter((todos) =>
    selectedFilterType === 'COMPLETED'
      ? todos.completed
      : selectedFilterType === 'INCOMPLETED'
      ? !todos.completed
      : todos
  );
});
