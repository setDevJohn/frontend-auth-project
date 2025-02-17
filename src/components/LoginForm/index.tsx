import { Dispatch, FormEvent, SetStateAction, useContext, useState } from 'react';
import { toastError, toastWarn } from '@utils/toast';
import { TLoginForm } from '@pages/Auth';
import { login } from '@pages/Auth/inputList';
import { FormButton } from '../FormButton';
import { InputWithLabel } from '../InputWithLabel';
import { FormContainer, Form, FormTitle, SpanTextForm, } from './styles';
import { AuthContext } from 'context/auth';

type TLoginChange = {
  name: string,
  value: string,
}
type ComponentProps = {
  resetForm: () => void,
  errorFields: string[],
  setErrorFields: Dispatch<SetStateAction<string[]>>,
  loginForm: TLoginForm,
  setLoginForm: Dispatch<SetStateAction<TLoginForm>>,
  handleChangeForm: () => void,
  setResetModal: (status: boolean) => void,
}

export function LoginForm ({
  resetForm,
  errorFields,
  setErrorFields,
  loginForm,
  setLoginForm,
  handleChangeForm,
  setResetModal,
}: ComponentProps) {
  const [loading, setLoading] = useState(false);

  const { handleLogin } = useContext(AuthContext);

  function handleLoginChange ({ name, value }: TLoginChange) {
    setErrorFields(prev => prev.filter(field => field !== name));
    setLoginForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    const errorFields = Object.entries(loginForm).filter(field => !field[1]);
    if (errorFields.length) {
      setErrorFields(errorFields.map(field => field[0]));
      return toastWarn('Preencha todos os campos');
    }

    try {
      setLoading(true);
      await handleLogin({ login: loginForm.login, pass: loginForm.pass });
      resetForm();
    } catch (err) {
      console.error('Erro ao criar usuário:', err.message);
      toastError(err.message);
    } finally {
      setLoading(false);
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

        <FormButton loading={loading} text="ENTRAR"/>

        <SpanTextForm $loading={loading} onClick={() => setResetModal(true)}>
          Esqueci minha senha
        </SpanTextForm >
        <SpanTextForm $lastSpan $loading={loading} onClick={handleChangeForm}>
          Não possui um cadastro? Se inscreva!
        </SpanTextForm>
      </Form>
    </FormContainer>
  );
}