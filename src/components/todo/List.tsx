import { useAtomValue } from 'jotai';
import { filteredToDos } from 'state/todo';
import ToDoItem from './Item';

const ToDoList = () => {
  const toDos = useAtomValue(filteredToDos);

  return (
    <div>
      {toDos.map((item) => (
        <ToDoItem
          key={`todo-${item.id}`}
          id={item.id}
          text={item.text}
          completed={item.completed}
        />
      ))}
    </div>
  );
};

export default ToDoList;
