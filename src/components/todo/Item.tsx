interface IToDoItem {
  text: string;
}

const ToDoItem = ({ text }: IToDoItem) => {
  return <div>{text}</div>;
};

export default ToDoItem;
