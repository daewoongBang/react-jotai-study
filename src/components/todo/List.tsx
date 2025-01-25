import { useAtomValue } from 'jotai';
import { filteredToDos } from 'state/todo';
import ToDoItem from './Item';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px;
`;

const ToDoList = () => {
  const toDos = useAtomValue(filteredToDos);

  return (
    <Wrapper>
      {toDos.map((item) => (
        <ToDoItem
          key={`todo-${item.id}`}
          id={item.id}
          text={item.text}
          completed={item.completed}
        />
      ))}
    </Wrapper>
  );
};

export default ToDoList;
