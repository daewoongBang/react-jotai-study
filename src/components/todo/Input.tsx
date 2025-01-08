import { useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { toDosAtom } from 'state/todo';

interface IForm {
  text: string;
}

const ToDoInput = () => {
  const setToDos = useSetAtom(toDosAtom);

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>();

  const onSubmit = handleSubmit((data) => {
    setToDos((prev) => [
      { id: Date.now(), text: data.text, completed: false },
      ...prev,
    ]);

    setValue('text', '');
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder='What are you going to do today?'
          {...register('text', { required: 'required' })}
        />
        <div>{errors.text?.message || ''}</div>
      </form>
    </div>
  );
};

export default ToDoInput;
