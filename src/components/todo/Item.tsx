import { useSetAtom } from 'jotai';
import { IToDo, toDosAtom } from 'state/todo';

const ToDoItem = ({ id, text, completed }: IToDo) => {
  const setToDos = useSetAtom(toDosAtom);

  const toggleCompleted = () => {
    setToDos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !completed } : item
      )
    );
  };

  const removeItem = () => {
    setToDos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input
        type='checkbox'
        id={`check-${id}`}
        defaultChecked={completed}
        onChange={toggleCompleted}
      />

      <label htmlFor={`check-${id}`}>{text}</label>

      <button type='button' onClick={removeItem}>
        x
      </button>
    </div>
  );
};

export default ToDoItem;
