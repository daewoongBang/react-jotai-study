import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

interface IInput {
  name: string;
  rules?: RegisterOptions;
  placeholder?: string;
  register: UseFormRegister<any>;
  errorMessage?: string;
  [key: string]: any;
}

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

const ErrorText = styled.span`
  color: red;
  margin: 5px 0;
  display: block;
`;

const Input = ({
  name,
  rules,
  placeholder,
  errorMessage,
  register,
  ...rest
}: IInput) => {
  return (
    <div>
      <StyledInput
        {...register(name, rules)}
        placeholder={placeholder}
        {...rest}
      />

      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </div>
  );
};

export default Input;
