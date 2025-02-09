import { useState } from 'react';

import { RegisterForm } from '@components/RegistForm';
import { LoginForm } from '@components/LoginForm';
import { AuthImage } from '@components/AuthImage';
import { Container, ResetPassword } from './styles';

export type TLoginForm = {
  login: string,
  pass: string,
}
export type TRegisterForm = {
  name: string,
  email: string,
  pass: string,
  companyName: string,
  tradingName: string,
  cnpj: string,
}

const defaultLoginForm = {
  login: '',
  pass: '',
};
const defaultRegisterForm = {
  name: '',
  email: '',
  pass: '',
  companyName: '',
  tradingName: '',
  cnpj: '',
};

export function Auth () {
  const [loginForm, setLoginForm] = useState<TLoginForm>(defaultLoginForm);
  const [registerForm, setRegisterForm] = useState<TRegisterForm>(defaultRegisterForm);
  const [registerStatus, setRegisterStatus] = useState<boolean>(false);
  const [errorFields, setErrorFields] = useState<string[]>(['']);

  function resetForm () {
    setLoginForm(defaultLoginForm);
    setRegisterForm(defaultRegisterForm);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    } 
  }

  const handleChangeForm = () => {
    setRegisterStatus(prev => !prev);
    setErrorFields([]);
    
    setTimeout(() => resetForm(), 400);
  };

  return (
    <Container>
      <RegisterForm 
        errorFields={errorFields}
        setErrorFields={setErrorFields}
        registerForm={registerForm}
        setRegisterForm={setRegisterForm}
        handleChangeForm={handleChangeForm}
      />      

      <LoginForm
        resetForm={resetForm}
        errorFields={errorFields}
        setErrorFields={setErrorFields}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        handleChangeForm={handleChangeForm}
      />

      <AuthImage registerStatus={registerStatus}/>    

      <ResetPassword $resetModal={false}>
        Esqueceu a senha? Clique aqui para recuperá-la.
      </ResetPassword>
    </Container>
  );
}