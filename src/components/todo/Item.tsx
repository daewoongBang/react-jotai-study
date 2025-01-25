import { useSetAtom } from 'jotai';
import { IToDo, toDosAtom } from 'state/todo';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  > button {
    border: none;
    background-color: white;
    cursor: pointer;
  }
`;

const Label = styled.label<{ $isCompleted: boolean }>`
  color: ${(props) => (props.$isCompleted ? 'gray' : 'inherit')};
  text-decoration: ${(props) => (props.$isCompleted ? 'line-through' : 'none')};
`;

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
    <Container>
      <div>
        <input
          type='checkbox'
          id={`check-${id}`}
          defaultChecked={completed}
          onChange={toggleCompleted}
        />

        <Label $isCompleted={completed} htmlFor={`check-${id}`}>
          {text}
        </Label>
      </div>

      <button type='button' onClick={removeItem}>
        x
      </button>
    </Container>
  );
};

export default ToDoItem;
