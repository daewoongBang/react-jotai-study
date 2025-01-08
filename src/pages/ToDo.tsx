import ToDoInput from 'components/todo/Input';
import ToDoList from 'components/todo/List';

const ToDoPage = () => {
  return (
    <div>
      <h1>To Do List</h1>

      <ToDoInput />

      <ToDoList />
    </div>
  );
};

export default ToDoPage;