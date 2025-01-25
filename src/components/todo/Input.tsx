import Input from 'components/common/Input';
import { useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { toDosAtom } from 'state/todo';
import styled from 'styled-components';

interface IForm {
  text: string;
}

const Wrapper = styled.div`
  margin: 20px 0;
`;

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
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Input
          name={'text'}
          register={register}
          rules={{ required: 'required!' }}
          placeholder='What are you going to do today?'
          errorMessage={errors.text?.message}
        />
      </form>
    </Wrapper>
  );
};

export default ToDoInput;
