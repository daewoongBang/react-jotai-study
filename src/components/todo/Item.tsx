import { IToDo } from 'state/todo';

const ToDoItem = ({ id, text, completed }: IToDo) => {
  return (
    <div>
      <input type='checkbox' id={`check-${id}`} defaultChecked={completed} />

      <label htmlFor={`check-${id}`}>{text}</label>

      <button type='button'>x</button>
    </div>
  );
};

export default ToDoItem;
