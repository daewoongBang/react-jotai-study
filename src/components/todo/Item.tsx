import { useSetAtom } from 'jotai';
import { IToDo, toDosAtom } from 'state/todo';
import styled from 'styled-components';

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

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    > button {
      border: none;
      background-color: white;
      cursor: pointer;
    }
  `;

  return (
    <Wrapper>
      <div>
        <input
          type='checkbox'
          id={`check-${id}`}
          defaultChecked={completed}
          onChange={toggleCompleted}
        />

        <label htmlFor={`check-${id}`}>{text}</label>
      </div>

      <button type='button' onClick={removeItem}>
        x
      </button>
    </Wrapper>
  );
};

export default ToDoItem;
