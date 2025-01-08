import { useSetAtom } from 'jotai';
import { filterType, ToDoFilterType } from 'state/todo';

const ToDoFilter = () => {
  const setFilterType = useSetAtom(filterType);

  const onChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ToDoFilterType;

    setFilterType(value);
  };

  return (
    <div>
      <input
        type='radio'
        name='todo_filter'
        id='filter_all'
        value='all'
        defaultChecked
        onChange={onChangeFilter}
      />
      <label htmlFor='filter_all'>All</label>

      <input
        type='radio'
        name='todo_filter'
        id='filter_completed'
        value='completed'
        onChange={onChangeFilter}
      />
      <label htmlFor='filter_completed'>Completed</label>

      <input
        type='radio'
        name='todo_filter'
        id='filter_incompleted'
        value='incompleted'
        onChange={onChangeFilter}
      />
      <label htmlFor='filter_incompleted'>Incompleted</label>
    </div>
  );
};

export default ToDoFilter;
