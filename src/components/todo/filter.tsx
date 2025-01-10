import { useSetAtom } from 'jotai';
import { Fragment } from 'react';
import { FILTER, filterType, ToDoFilterType } from 'state/todo';

const ToDoFilter = () => {
  const setFilterType = useSetAtom(filterType);

  const onChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ToDoFilterType;

    setFilterType(value);
  };

  return (
    <div>
      {Object.keys(FILTER).map((option, index) => (
        <Fragment key={`${option}-${index}`}>
          <input
            type='radio'
            name='todo_filter'
            id={`filter_${option}`}
            value={option}
            defaultChecked={option === FILTER.ALL}
            onChange={onChangeFilter}
          />
          <label htmlFor={`filter_${option}`}>{option}</label>
        </Fragment>
      ))}
    </div>
  );
};

export default ToDoFilter;
