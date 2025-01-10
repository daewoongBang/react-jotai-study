import ToDoFilter from 'components/todo/Filter';
import ToDoInput from 'components/todo/Input';
import ToDoList from 'components/todo/List';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;

  > h1 {
    font-size: 36px;
    font-weight: 700;
    margin: 20px 0;
  }
`;

const ToDoPage = () => {
  return (
    <Wrapper>
      <h1>To Do List</h1>

      <ToDoFilter />

      <ToDoInput />

      <ToDoList />
    </Wrapper>
  );
};

export default ToDoPage;
