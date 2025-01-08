import { atom } from 'jotai';

export type ToDoFilterType = 'all' | 'completed' | 'incompleted';

export interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}

export const filterType = atom<ToDoFilterType>('all');

export const toDosAtom = atom<IToDo[]>([]);

export const filteredToDos = atom<IToDo[]>((get) => {
  const selectedFilterType = get(filterType);

  return get(toDosAtom).filter((todos) =>
    selectedFilterType === 'completed'
      ? todos.completed
      : selectedFilterType === 'incompleted'
      ? !todos.completed
      : todos
  );
});
