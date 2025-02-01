import { Dispatch, FormEvent, SetStateAction } from 'react';
import { toastWarn } from '@utils/toast';
import { TLoginForm } from '@pages/Auth';
import { login } from '@pages/Auth/inputList';
import { FormButton } from '../FormButton';
import { InputWithLabel } from '../InputWithLabel';
import { FormContainer, Form, FormTitle, SpanTextForm, } from './styles';

type TLoginChange = {
  name: string,
  value: string,
}
type ComponentProps = {
  errorFields: string[],
  setErrorFields: Dispatch<SetStateAction<string[]>>,
  loginForm: TLoginForm,
  setLoginForm: Dispatch<SetStateAction<TLoginForm>>,
  handleChangeForm: () => void,
}

export function LoginForm ({
  errorFields,
  setErrorFields,
  loginForm,
  setLoginForm,
  handleChangeForm,
}: ComponentProps) {
  function handleLoginChange ({ name, value }: TLoginChange) {
    setErrorFields(prev => prev.filter(field => field !== name));
    setLoginForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    const errorFields = Object.entries(loginForm).filter(field => !field[1]);
    if (errorFields.length) {
      setErrorFields(errorFields.map(field => field[0]));
      return toastWarn('Preencha todos os campos');
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormTitle>LOGIN</FormTitle>

        {login.map((curField, i) => (
          <InputWithLabel
            key={i}
            name={curField.name}
            label={curField.label}
            type={curField.type ?? null} 
            error={errorFields.includes(curField.name)}
            value={loginForm[curField.name as keyof TLoginForm]}
            handleChange={(target) => handleLoginChange(target)}
          />
        ))}

        <FormButton text="REGISTRAR"/>

        <SpanTextForm>
          Esqueci minha senha
        </SpanTextForm>
        <SpanTextForm $lastSpan onClick={handleChangeForm}>
          Não possui um cadastro? Se inscreva!
        </SpanTextForm>
      </Form>
    </FormContainer>
  );
}